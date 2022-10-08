import S3 from "aws-sdk/clients/s3";

const REGION = "us-east-1";
const s3Client = new S3({
  region: REGION,
  s3ForcePathStyle: true,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID || "",
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || "",
    sessionToken: process.env.AWS_SESSION_TOKEN || "",
  },
});

export { s3Client };
