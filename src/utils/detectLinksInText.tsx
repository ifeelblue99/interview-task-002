const URL_REGEX = /(https?:\/\/[^\s]+)/g;

export default function detectLinksInText(text: string) {
  /*
    detect links inside text and turn into anchor tag
  */
  return text.split(" ").map(part => URL_REGEX.test(part) ? <a target="_blank" href={part}>{part}</a> : part + " ")
}
