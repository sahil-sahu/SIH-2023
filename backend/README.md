
# Drug Dispenser Api Endpoints

## nearby atm search
link : 
    
    http://3.110.200.176:3000/api/nearby
    payload : {
    "lng": 85.76327,
    "lat":20.27601
    }

## Medicines
### get all Medicines
link: 

    http://3.110.200.176:3000/medicines

## To check server is working

    http://3.110.200.176:3000/health 

## Ordering
### making order request 
jsonpayload : 

        [
            {
                "_id": "650ef4ecbd8b4654baecdc2f",
                "quantity": 10
            },
            {
                "_id": "650ef4ecbd8b4654baecdc30",
                "quantity": 20
            },
            {
                "_id": "650ef4ecbd8b4654baecdc31",
                "quantity": 3
            }
        ]
 link: (method = post)

    http://3.110.200.176:3000/order

### payment confirmation 
jsonpayload : 

        {
            "paymentid":"651056faa141e8d7877bcf51"
        }
link: (method = post)

    http://3.110.200.176:3000/order/pay

