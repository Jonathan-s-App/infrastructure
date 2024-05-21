// Import required AWS SDK clients and commands for Node.js
const { SNSClient, CreateTopicCommand } = require('@aws-sdk/client-sns');
const REGION = process.argv[3]; //e.g. "us-east-1"

// Set the parameters
const params = { Name: process.argv[2] }; //TOPIC_NAME

const run = async () => {
  try {
    const snsClient = new SNSClient({ region: REGION });
    const data = await snsClient.send(new CreateTopicCommand(params));
    console.log('Success.', data);
    return data; // For unit tests.
  } catch (err) {
    console.log('Error', err.stack);
  }
};
run();