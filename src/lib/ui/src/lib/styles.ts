export function getLauncherColor(attr: string): string {
  switch (attr) {
    case 'canvas':
      return '#f5f5f5';
    case 'box':
      return '#ffffff';
    default:
      return '';
  }
}
