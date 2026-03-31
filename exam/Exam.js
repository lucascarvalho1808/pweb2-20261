class Exam {
    constructor(weight, correctAnswers) {
        this.weight = weight;
        this.correctAnswers = correctAnswers;
        this.studentsAnswers = [];
    }

    add(studentsAnswers) {
        let nota = 0 

        for (let i = 0; i < studentsAnswers.length; i++) {
            if (studentsAnswers[i] === this.correctAnswers[i]) {
                nota += this.weight[i]
            } 
        }
        this.studentsAnswers.push({
            respostas: studentsAnswers,
            nota: nota
        })
    }

    _getNotas() {
        return this.studentsAnswers.map(aluno => aluno.nota)
    }

    avg() {
        const notas = this._getNotas()
        if (notas.length === 0) return 0

        let soma = 0
        for (let nota of notas) {
            soma += nota
        }

        return soma / notas.length
    }

    min(count = 1) {
        const notas = this._getNotas()
        notas.sort((a, b) => a - b)

        return notas.slice(0, count)
    }

    max(count = 1) {
         const notas = this._getNotas()
        notas.sort((a, b) => b - a)

        return notas.slice(0, count)
    }

    lt(limit) {
        return this._getNotas().filter(nota => nota < limit)
    }

    gt(limit) {
        return this._getNotas().filter(nota => nota > limit)
    }
}


// Testes 

const pw2 = new Exam([2, 4, 4], ['a', 'd', 'b']);

pw2.add(['b', 'b', 'b'])
pw2.add(['a', 'c', 'b'])
pw2.add(['a', 'd', 'b'])
pw2.add(['c', 'c', 'c'])
pw2.add(['d', 'c', 'a'])

// Média das notas
console.log("Média: ", pw2.avg())

// Vetor com três menores notas
console.log("Três menores notas: ", pw2.min(3)) 

// Vetor com cinco maiores notas
console.log("Cinco maiores notas: ", pw2.max(5))

// Vetor com todas as notas menores do que 5,0
console.log("Notas menores do que 5,0: ", pw2.lt(5))

// Vetor com todas as notas maiores do que 7,0
console.log("Notas maiores do que 7,0: ", pw2.gt(7))