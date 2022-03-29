import requests
import json

class nft:

	def json_saver(save):
		try:
			with open('./exported.json', "a") as file:
				json.dump(save, file, indent=4)
		except:
			print("Error occurred during saving output")
			pass
		return

	def get_nft(address, volume):
		token_id =  0
		failed = 0
		all_nfts = []
		while(token_id < volume):
			url = "https://api.nftport.xyz/v0/nfts/{}/{}".format(address, token_id)
			querystring = {"chain":"ethereum"}
			headers = {
				'Content-Type': "application/json",
				'Authorization': "f636f122-48b6-45ec-942e-1415d9eda95b"
				}
			re = requests.request("GET", url, headers=headers, params=querystring).json()
			try:
				if(re['nft']['metadata'] == None):
					failed +=1
					if (failed > 20):
						break
					pass
				else:
					save = {
						'prject' : {
							'name' : re['contract']['name'] ,
							'symbol' : re['contract']['symbol'],
							'type' : re['contract']['type'],
						},
						'token_id' : token_id ,
						'contract_address' : re['nft']['contract_address'],
						'owner' : re['owner'],
						'img_link' :re['nft']['cached_file_url'] ,
						'img_height' :re['nft']['file_information']['height'] ,
						'img_width' : re['nft']['file_information']['width']
					}
					all_nfts.append(save)
			except:
				print("Error occurred during scaping")
				pass
			token_id += 1
		nft.json_saver(all_nfts)
		return all_nfts


print(nft.get_nft('0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d', 20))