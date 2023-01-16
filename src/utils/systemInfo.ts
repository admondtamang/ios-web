/**
 *
 * @returns {battery,connectionType}
 */
export async function getSystemInfo() {
  if (typeof window !== "undefined" && navigator) {
    const battery = await navigator?.getBattery();
    let connectionType = navigator?.connection.effectiveType;

    return { battery, connectionType };
  }
}
