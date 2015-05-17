#Placeholder script that hits the github /username route
#cURL command can be executed by node rather than separately executing the shell script.

get_usernames() {
  #required:
  #value: username whose existence has to be validated
  #authenticity_token: from the browser resources
  page=$(curl -X POST https://github.com/signup_check/username?value=aak&authenticity_token='*insert token here*')
  echo "$page" >> collection.txt
}

get_usernames
