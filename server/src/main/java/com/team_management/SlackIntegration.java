package com.team_management;

import com.github.seratch.jslack.Slack;
import com.github.seratch.jslack.api.webhook.Payload;
import com.github.seratch.jslack.api.webhook.WebhookResponse;

public class SlackIntegration {

    private static String webHooksUrl = "";
    private static String OAuthToken = "";
    private static String slackChannel = "";

    public static void sendMessageToSlack(String message) {

        try {
            Payload payload = Payload.builder().channel(slackChannel).text(message).build();
            WebhookResponse wbRes = Slack.getInstance().send(webHooksUrl,payload);
        } catch (Exception e){
            e.printStackTrace();
        }
    }

}

