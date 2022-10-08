
# Poc S3 select

# Basic commands

```
## Comandos AWS CLI Bucket S3 ##

## list buckets ##
aws s3 ls --endpoint-url http://localhost:4566

## create an S3 Buckets ##
aws s3 mb s3://poc-s3-selects --endpoint-url=http://localhost:4566 

## copies a local file or S3 object to another local ##
aws s3 cp poc-s3-select-file.csv s3://poc-s3-select --endpoint-url=http://localhost:4566 

## delete this file ##
aws s3 rm s3://poc-s3-select/poc-s3-select-file.csv --endpoint-url=http://localhost:4566 
```


## Referencies
- <a href="https://docs.aws.amazon.com/cli/latest/reference/s3/">Concepts and notations in the set of high-level S3 commands provided</a>
- <a href="https://docs.localstack.cloud/aws/s3/">Doc S3 localstack</a>