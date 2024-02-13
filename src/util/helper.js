export function truncateDescription(description, length) {
  const words = description.split(" ");
  if (words.length > length) {
    return words.slice(0, length).join(" ") + "...";
  }
  return description;
}
