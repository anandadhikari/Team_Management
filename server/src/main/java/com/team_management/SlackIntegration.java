package com.team_management;

import com.github.seratch.jslack.Slack;
import com.github.seratch.jslack.api.webhook.Payload;
import com.github.seratch.jslack.api.webhook.WebhookResponse;

public class SlackIntegration {

    private static String webHooksUrl = "https://hooks.slack.com/services/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";
    private static String OAuthToken = "xapp-1-A03SEUN8EGN-3908349030420-eee45c9237a8f71da79c1df97c3f8e514b0f8dcbc2ff37b10c729d7a10610a48";
    private static String slackChannel = "errors";

    public static void sendMessageToSlack(String message) {

        try {
            Payload payload = Payload.builder().channel(slackChannel).text(message).build();
            WebhookResponse wbRes = Slack.getInstance().send(webHooksUrl,payload);
        } catch (Exception e){
            e.printStackTrace();
        }
    }

}

