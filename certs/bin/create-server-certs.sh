#!/bin/bash
set -u
set -e

FQDN='dev.affar.is'

# make directories to work from
#mkdir -p certs/{server,client,ca,tmp}

# Create Certificate for this domain,
openssl genrsa \
  -out ../server/affaris.key.pem \
  2048

# Create the CSR
openssl req -new \
  -key ../server/affaris.key.pem \
  -out ../tmp/affaris.csr.pem \
  -subj "/C=MX/ST=Distrito Federal/L=Miguel Hidalgo/O=Ari Technology/OU=Affaris/CN=${FQDN}"
