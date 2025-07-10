import { after } from "@vendetta/patcher";
import { findByStoreName } from "@vendetta/metro";
import { UserStore } from "@vendetta/stores";
import { storage } from "@vendetta/storage";
import Settings from "./Settings";

const MessageActions = findByStoreName("MessageActions");

let unpatch: () => void;

const DEFAULT_PREFIX = "Discord from PS2";

export const onLoad = () => {
  console.log("[DiscordFromPS2] Loading plugin");

  unpatch = after("sendMessage", MessageActions, ([channelId, message], ret) => {
    if (message.author?.id === UserStore.getCurrentUser().id && typeof message.content === "string") {
      const prefix = storage.prefix || DEFAULT_PREFIX;
      message.content = `${prefix} ${message.content}`;
    }
    return ret;
  });
};

export const onUnload = () => {
  console.log("[DiscordFromPS2] Unloading plugin");
  unpatch?.();
};

export const settings = Settings;
