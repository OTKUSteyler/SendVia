import { storage } from "@vendetta/plugin";
import { addSettings } from "@vendetta/ui/settings";
import { before } from "@vendetta/patcher";
import { sendMessage } from "@vendetta/discord/messages";
import Settings from "./Settings";

// Set default values if not already stored
storage.settings ??= {
    enabled: true,
    customText: "Sent from my Samsung Smart Fridge",
};

// Patch sendMessage to modify outgoing messages
const patch = before("sendMessage", sendMessage, ([channelId, message]) => {
    if (storage.settings.enabled && message?.content) {
        message.content += ` (${storage.settings.customText})`;
    }
});

// Register settings page
const settingsEntry = addSettings("Smart Fridge Sender", Settings);

// Plugin load
export function onLoad() {}

// Plugin unload
export function onUnload() {
    patch(); // Unpatch sendMessage
    settingsEntry.remove(); // Remove settings
}
