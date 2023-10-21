function convertTemperature() {
    const inputTemperature = parseFloat(document.getElementById("tempInput").value);
    const originalUnit = document.getElementById("originalUnit").value;

    if (originalUnit === "Celsius") {
        const fahrenheit = (inputTemperature * 9/5) + 32;
        const kelvin = inputTemperature + 273.15;

        document.getElementById("fahrenheitOutput").textContent = `Fahrenheit: ${fahrenheit.toFixed(2)}°F`;
        document.getElementById("kelvinOutput").textContent = `Kelvin: ${kelvin.toFixed(2)}K`;
    } else if (originalUnit === "Fahrenheit") {
        const celsius = (inputTemperature - 32) * 5/9;
        const kelvin = (inputTemperature - 32) * 5/9 + 273.15;

        document.getElementById("fahrenheitOutput").textContent = `Celsius: ${celsius.toFixed(2)}°C`;
        document.getElementById("kelvinOutput").textContent = `Kelvin: ${kelvin.toFixed(2)}K`;
    } else if (originalUnit === "Kelvin") {
        const celsius = inputTemperature - 273.15;
        const fahrenheit = (inputTemperature - 273.15) * 9/5 + 32;

        document.getElementById("fahrenheitOutput").textContent = `Celsius: ${celsius.toFixed(2)}°C`;
        document.getElementById("kelvinOutput").textContent = `Fahrenheit: ${fahrenheit.toFixed(2)}°F`;
    }
}



