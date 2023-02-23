import { PutObjectCommand, CreateBucketCommand } from "@aws-sdk/client-s3";
import { s3Client } from "./sampleClient"

const params = {
    Bucket: "sample-bucket-101", 
    Key: "sample_upload.txt", 
    Body: "Hello world", 
  }

  const run = async () => {
    try {
      const data = await s3Client.send(
          new CreateBucketCommand({ Bucket: params.Bucket })
      );
      console.log(data);
      console.log("Successfully created a bucket called ", data.Location);
      return data; 
    } catch (err) {
      console.log("Error", err);
    }
    try {
        const results = await s3Client.send(new PutObjectCommand(params));
        console.log(
            "Successfully created " +
            params.Key +
            " and uploaded it to " +
            params.Bucket +
            "/" +
            params.Key
        );
        return results; 
      } catch (err) {
        console.log("Error", err);
      }
    };
    run();