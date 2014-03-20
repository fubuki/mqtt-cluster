###
#Step 1 - Generate server certificates etc...  (most of this code is horribly ripped off from nodejs docs currently -> http://nodejs.org/docs/latest/api/tls.html)
###

#Assuming your starting from a clean directory

mkdir server
cd server

#generate private key
openssl genrsa -out server-private-key.pem 4096

#generate signing request
openssl req -new -key server-private-key.pem -out server-certificate-signing-request.pem

#self sign the request (or send off the Verisign etc etc)
openssl x509 -req -in server-certificate-signing-request.pem -signkey server-private-key.pem -out server-certificate.pem

###
#Step 2 - now for the client certificates
###
cd ../
mkdir client
cd client


#generate private key
openssl genrsa -out client-private-key.pem 4096

#generate signing request
openssl req -new -key client-private-key.pem -out client-certificate-signing-request.pem

#self sign the request (or send off the Verisign etc etc)
openssl x509 -req -in client-certificate-signing-request.pem -signkey client-private-key.pem -out client-certificate.pem


