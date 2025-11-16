const extensionToFileTypeMap = {
  js: 'javascript',
  jsx: 'javascript',
  ts: 'typescript',
  tsx: 'typescript',
  html: 'html',
  css: 'css',
  json: 'json',
  md: 'markdown',
  java: 'java',
  py: 'python',
  rb: 'ruby',
  php: 'php',
  c: 'c',
  cpp: 'cpp',
  cs: 'csharp',
  go: 'go',
  rs: 'rust',
  swift: 'swift',
  kt: 'kotlin',
  m: 'objective-c',
  sh: 'shell',
};

export const extensionToFileType = (extension) => {
  if (!extension) return undefined;
  return extensionToFileTypeMap[extension];
};
