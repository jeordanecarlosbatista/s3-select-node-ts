import { SelectObjectContentRequest } from "aws-sdk/clients/s3";
import { s3Client } from "../src/s3-client";
import { Stream } from "stream";

const BUCKET = "s3-select-poc-core-banking";
const OBJECT = "poc-s3-select-file.csv";

const selectOjectContent = (
  params: SelectObjectContentRequest
): Promise<any> => {
  return new Promise((resolve, reject) => {
    s3Client.selectObjectContent(params, (err, data) => {
      if (err) {
        reject(err);
      }

      if (!data) {
        reject(data);
      }

      const eventStream = data.Payload as Stream;
      let resultData = "";

      eventStream?.on?.("data", function (event) {
        if (event.Records && event.Records.Payload) {
          resultData += Buffer.from(event.Records.Payload);
        }
      });

      eventStream?.on?.("end", () => resolve(resultData));

      eventStream?.on?.("error", (err) => {
        reject(err);
      });
    });
  });
};

describe("tests on s3 select", () => {
  it("should return result query 'SELECT * FROM S3Object'", async () => {
    const query = "SELECT * FROM S3Object";
    const params: SelectObjectContentRequest = {
      Bucket: BUCKET,
      Key: OBJECT,
      ExpressionType: "SQL",
      Expression: query,
      InputSerialization: {
        CSV: {
          RecordDelimiter: "\n",
          FieldDelimiter: ",",
        },
      },
      OutputSerialization: {
        JSON: {
          RecordDelimiter: ",",
        },
      },
    };

    await selectOjectContent(params);
  });
});
