import * as dynamoDbLib from "./libs/dynamodb-lib.js";
import { success, failure } from "./libs/response-lib.js";


export async function main(event, context) {
  const data = JSON.parse(event.body);
  const params = {
    TableName: "notes",
    // "Key" defines the partition key and sort key of the item to be updated
    Key: {
      userId: event.requestContext.identity.cognitoIdentityId,
      noteId: event.pathParameters.id
    },
    // "UpdateExpression" defines the attributes to be updated
    // "ExpressionAttributeValues" define the value in the update expression
    UpdateExpression: "SET content = :content, attachment = :attachment",
    ExpressionAttributeValues: {
      ":attachment": data.attachment || null,
      ":content": data.content || null
    },
    // "ReturnValues" specifies if and how to return the item's attributes,
    // where ALL_NEW returns all attributes of the item after the update;
    ReturnValues: "ALL_NEW"
  };

  try {
    const result = await dynamoDbLib.call("update", params);
    return success({ status: true });
  } catch (e) {
    return failure({ status: false });
  }
}