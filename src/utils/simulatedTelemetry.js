export class TelemetrySimulator {
  constructor(baseData) {
    this.baseData = { ...baseData };
    this.listeners = [];
  }

  startSimulation(intervalMs = 1000) {
    this.interval = setInterval(() => {
      const updatedData = this.generateRealisticData();
      this.notifyListeners(updatedData);
    }, intervalMs);
  }

  stopSimulation() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  generateRealisticData() {
    const vary = (value, range) => {
      return value + (Math.random() - 0.5) * range;
    };

    const speed = Math.max(0, vary(this.baseData.speed, 3));
    const flowRate = speed > 1 ? vary(this.baseData.flowRate, 15) : 0;

    this.baseData.speed = speed;
    this.baseData.battery = Math.max(0, this.baseData.battery - 0.008);
    this.baseData.tankLevel = Math.max(0, this.baseData.tankLevel - 0.012);
    this.baseData.pressure = vary(this.baseData.pressure, 0.2);
    this.baseData.flowRate = flowRate;
    this.baseData.latitude += (Math.random() - 0.5) * 0.0001;
    this.baseData.longitude += (Math.random() - 0.5) * 0.0001;
    this.baseData.sprayWidth = vary(this.baseData.sprayWidth, 0.5);
    this.baseData.gpsSignal = Math.min(100, vary(this.baseData.gpsSignal, 2));

    return { ...this.baseData };
  }

  subscribe(callback) {
    this.listeners.push(callback);
    return () => {
      this.listeners = this.listeners.filter(cb => cb !== callback);
    };
  }

  notifyListeners(data) {
    this.listeners.forEach(callback => callback(data));
  }
}
