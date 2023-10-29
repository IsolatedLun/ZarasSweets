import type { T_ItemTypes } from "../stores/types";
import { ICON_BOX, ICON_BREAD, ICON_CAKE, ICON_COOKIE, ICON_PIE } from "./icons";

export const BUTTON_OVERLAY_DURATION = 2000;

export const MODAL_ID = 'modal';

export const MINIMUM_QTY = 0.5;

export const TYPE_TO_ICON: Record<T_ItemTypes, string> = {
    cake: ICON_CAKE,
    cookie: ICON_COOKIE,
    pie: ICON_PIE,
    box: ICON_BOX,
    brioche: ICON_BREAD,
    croissant: ICON_BREAD,
}