#!/bin/bash
set -u
set -e



# Create your very own Root Certificate Authority
openssl genrsa \
  -out ../ca/ari-ca.key.pem \
  2048

# Self-sign your Root Certificate Authority
# Since this is private, the details can be as bogus as you like
openssl req \
  -x509 \
  -new \
  -sha256 \
  -nodes \
  -key ../ca/ari-ca.key.pem \
  -days 3652 \
  -out ../ca/ari-ca.crt.pem \
  -subj "/C=MX/ST=Distrito Federal/L=Miguel Hidalgo/O=ARI Signing Authority Inc/CN=aritech.lat"

# NOTE
# -nodes means "no-des" which means "no passphrase"
# -days 3652 means that this example will break about 10 years from now
