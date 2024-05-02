document.getElementById('multiplyBtn').addEventListener('click', multiplyMatrices);

function multiplyMatrices() {
  const matrixA = parseMatrix(document.getElementById('matrixA').value);
  const matrixB = parseMatrix(document.getElementById('matrixB').value);

  if (!matrixA || !matrixB) {
    document.getElementById('result').textContent = 'Invalid input. Please enter valid matrices.';
    return;
  }

  if (matrixA[0].length !== matrixB.length) {
    document.getElementById('result').textContent = 'Matrix dimensions are incompatible for multiplication.';
    return;
  }

  const result = multiply(matrixA, matrixB);
  document.getElementById('result').innerHTML = 'Result:<br>' + formatMatrix(result);
}

function parseMatrix(matrixStr) {
  try {
    return JSON.parse('[' + matrixStr.replace(/\n/g, ',') + ']');
  } catch (error) {
    return null;
  }
}

function multiply(matrixA, matrixB) {
  const result = [];

  for (let i = 0; i < matrixA.length; i++) {
    result[i] = [];
    for (let j = 0; j < matrixB[0].length; j++) {
      let sum = 0;
      for (let k = 0; k < matrixA[0].length; k++) {
        sum += matrixA[i][k] * matrixB[k][j];
      }
      result[i][j] = sum;
    }
  }

  return result;
}

function formatMatrix(matrix) {
  let resultStr = '';
  for (let row of matrix) {
    resultStr += '[' + row.join(', ') + ']<br>';
  }
  return resultStr;
}