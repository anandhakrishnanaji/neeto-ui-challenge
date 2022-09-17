import dayjs from "dayjs";

export const calculateCreatedAgo = date => dayjs(date).fromNow();

export const dayTimeFormatter = date => dayjs(date).format("dddd, hh:mmA");
