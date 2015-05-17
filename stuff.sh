#get_usernames() {
  #list=$(ls -la);
  #echo $list
 # page=$(curl -X POST https://github.com/signup_check/username?value=aak&authenticity_token=UqNiayqrKea82%2BVQ6I98Z1SrUwIcWDCeaYJTiK%2BFfhicDpKiIXSA9qVMTbpRoM16u6YPLmc7Y4YyOPu%2FAbwk4A%3D%3D)
  #echo "$page" >> one.txt
  #return "$page"
#}

#get_usernames

get_list() {
  list=$(ls -la);
  echo $list >> one.txt
  return 1
}

get_list