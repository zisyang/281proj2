# import json
# import requests
###debug and test only
# url = "http://webapp-ASG-1-18172958.us-west-1.elb.amazonaws.com:5000/recipe?ingredients="
# ingredients = "%20Orange%20Carrot"
#
# def lambda_handler(event, context):
#     # TODO implement
#     req_url = url + ingredients
#     print(req_url)
#     response = requests.get(req_url)
#     print(response.json())
#     return {
#         'statusCode': 200,
#         'body': response.json()
#     }
#######
#
#General configuration Info
#Description
#Timeout need to set to 0 min 30 sec
#

import json
import boto3
import requests
import urllib.request as urlreq

def lambda_handler(event, context):
    
    # print(event['key1'])
    bucket="s3uploader-s3uploadbucket-l63io50vx6tm"
    # photo="852657.jpg"
    photo=event['Image']
    
    client=boto3.client('rekognition')

    #process using S3 object
    
    response = client.detect_labels(Image={'S3Object': {'Bucket': bucket, 'Name': photo}},
        MaxLabels=10)    

    #Get the labels
    labels=response['Labels']
    # json_formatted_str = json.dumps(labels, indent=4)
    # print(json_formatted_str)
    print("Labels Name:>>")
    c=0
    for each in labels:
        print(each['Name'])
        c=c+1
    print("Labels count:>>", c)
        
    print("Labels Categories:>>")
    c=0
    for each in labels:
        for x in each['Categories']:
            print(x['Name'])
            c=c+1
    print("Categories count:>>", c)
    
    # preparation for recipeapi call
    foods_labels=[x for x in labels for y in x['Categories'] if y['Name']=="Food and Beverage"]
    exclude_dict = ['Food', 'Meal', 'Produce'] # exclude some useless labels
    ingredients = ""
    for each in foods_labels:
        if each['Name'] not in exclude_dict:
            ingredients += " " + each['Name']
        
    # call recipeapi
    recipeapi_url = "http://webapp-ASG-1-18172958.us-west-1.elb.amazonaws.com:5000/recipe"
    queryString = "?ingredients=" + urlreq.pathname2url(ingredients)
    req_url = recipeapi_url + queryString
    print(req_url)
    
    recipes_res = requests.get(req_url)
    recipes = recipes_res.json()
    
    return {
        'statusCode': 200,
        'body': {
            'queryString': queryString,
            'recipes': json.dumps(recipes)
         }
    }  