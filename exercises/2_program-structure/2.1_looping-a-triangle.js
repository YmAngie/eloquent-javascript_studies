let hash = '#';

printTriangle(hash);

function printTriangle(hash) {
  for(i = 0; i < 7; i++) {
    console.log(hash);
    hash = getString(hash);
  }
}

function getString(hash) {
  hash = hash + '#';
  return hash;
}