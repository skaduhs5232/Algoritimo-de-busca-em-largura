// link ide online: https://www.mycompiler.io/view/3lkVWIp7EHQ


class Grafo {
  private vertices: number;
  private matrizAdjacencia: number[][];

  constructor(vertices: number, matrizAdjacencia: number[][]) {
    this.vertices = vertices;
    this.matrizAdjacencia = matrizAdjacencia;
  }

  buscaEmLargura(verticeInicial: number) {
    const visitado: boolean[] = [];
    const distancia: number[] = [];
    const antecessor: (number | null)[] = [];

    for (let i = 0; i < this.vertices; i++) {
      visitado[i] = false;
      distancia[i] = -1;
      antecessor[i] = null;
    }

    const fila: number[] = [];

    visitado[verticeInicial] = true;
    distancia[verticeInicial] = 0;
    fila.push(verticeInicial);

    while (fila.length !== 0) {
      const verticeAtual = fila.shift()!;
      

      for (let vizinho = 0; vizinho < this.vertices; vizinho++) {
        if (this.matrizAdjacencia[verticeAtual][vizinho] === 1 && !visitado[vizinho]) {
          visitado[vizinho] = true;
          distancia[vizinho] = distancia[verticeAtual] + 1;
          antecessor[vizinho] = verticeAtual;
          fila.push(vizinho);
        }
      }
    }

   
    for (let i = 0; i < this.vertices; i++) {
      console.log("Vértice:", i, "|Distância:", distancia[i], "|Antecessor:", antecessor[i]);
        
    }
    console.log("\no valor ´null´ pode ser impresso em algumas \nsituações, sejam elas: sem antecessor,  porque \nainda não foi visitado, porque é o vértice inicial ")
  }
}

// MUde aqui a matriz!!:
const matrizAdjacencia = [
    [0, 1, 0, 0, 0],
    [1, 0, 1, 0, 0],
    [0, 1, 0, 1, 0],
    [0, 0, 1, 0, 1],
    [0, 0, 0, 1, 0]
];

const grafo = new Grafo(matrizAdjacencia.length, matrizAdjacencia);

console.log("Busca em Largura começando:");
grafo.buscaEmLargura(0);
