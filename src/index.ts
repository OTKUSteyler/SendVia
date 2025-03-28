import { storage } from "@vendetta/plugin";
import { addSettings } from "@vendetta/ui/settings";
import { before } from "@vendetta/patcher";
import { sendMessage } from "@vendetta/discord/messages";
import Settings from "./Settings";

// Default text if the user hasn't set one
storage.customText ??= "Sent from my Samsung Smart Fridge";

// Patch sendMessage to modify outgoing messages
const patch = before("sendMessage", sendMessage, ([channelId, message]) => {
    if (message?.content) {
        message.content += ` (${storage.customText})`;
    }
});

// Register settings page
const settingsEntry = addSettings("Smart Fridge Sender", Settings);

// Plugin unload
export function onUnload() {
    patch(); // Unpatch sendMessage
    settingsEntry.remove(); // Remove settings
}
