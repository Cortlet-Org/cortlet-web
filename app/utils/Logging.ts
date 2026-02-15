import {
    CloudWatchLogsClient,
    CreateLogStreamCommand,
    PutLogEventsCommand,
} from "@aws-sdk/client-cloudwatch-logs";

const client = new CloudWatchLogsClient({
    region: process.env.AWS_REGION,
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
    },
});

const LOG_GROUP = process.env.CLOUDWATCH_LOG_GROUP!;
const LOG_STREAM = process.env.CLOUDWATCH_LOG_STREAM!;

let sequenceToken: string | undefined = undefined;

async function ensureStreamExists() {
    try {
        await client.send(
            new CreateLogStreamCommand({
                logGroupName: LOG_GROUP,
                logStreamName: LOG_STREAM,
            })
        );
    } catch (_) {
        // Already exists → ignore
    }
}

export async function logEvent(message: string, extra: any = {}) {
    await ensureStreamExists();

    const event = {
        message: JSON.stringify({
            timestamp: new Date().toISOString(),
            message,
            ...extra,
        }),
        timestamp: Date.now(),
    };

    try {
        const result = await client.send(
            new PutLogEventsCommand({
                logEvents: [event],
                logGroupName: LOG_GROUP,
                logStreamName: LOG_STREAM,
                sequenceToken,
            })
        );

        sequenceToken = result.nextSequenceToken;
    } catch (err: any) {
        console.error("CloudWatch Log Error:", err);
    }
}
