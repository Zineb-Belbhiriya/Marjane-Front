# Marjane promotion 🚀

## Create user

### Create token
    endpoint: POST: localhost:8080/api/users/createToken
###
    {
    "fullName":"walid",
    "email":"walid@gmail.com",
    "role":"admin_general"
    }


### Create token
    endpoint: POST: localhost:8080/api/users/createmarjane
###
    {
    "city":"safi",
    "admin_id":"1"
    }
### create user using token
    endpoint: POST: localhost:8080/api/users/login

###
    {
        "password":"1233",
        "token":"eyi876iuyiuyiy7657"
    }

## login

    endpoint: POST: localhost:8080/api/users/login

###
    {
        "email":"walid@gmail.com",
        "password":"1234",
        "role":"admin_marjan"//marjane admin
    }

## create promotion

    endpoint: POST: localhost:8080/api/promotions/

###
    {
    "remise":"10",
    "product_id":"10"
    }

## validate promotion

    endpoint: POST: localhost:8080/api/promotions/status
###
    {
    "promotion_id":"120",
    "status":"accepted",
    "comment":"laykhellik lina a l admin"
    }

## get Logs token required

    endpoint: GET: localhost:8080/api/logs/