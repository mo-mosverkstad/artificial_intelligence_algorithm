# Artificial Intelligence Algorithms

A collection of fundamental AI algorithms implemented in Java and JavaScript, focusing on evolutionary computation and probabilistic reasoning.

## 📋 Overview

This repository contains implementations of:
- **Genetic Algorithm** (Simulated-Biological Algorithm)
- **Bayes Algorithm** (Statistics Algorithm)

## 🗂️ Repository Structure

```
artificial_intelligence_algorithm/
├── genetic_algorithm/
│   ├── JavaCode/
│   │   └── gaPilot/          # Java implementation of Genetic Algorithm
│   │       ├── src/
│   │       │   ├── main/java/
│   │       │   └── test/java/
│   │       └── target/       # Compiled classes
│   └── JavaScriptCode/
│       └── compressImageGSEA/ # Image compression using GA
└── bayes_algorithm/
    └── JavaScriptCode/        # JavaScript implementation of Bayes Algorithm
```

## 🧬 Genetic Algorithm

### Description
Genetic Algorithms are evolutionary algorithms inspired by natural selection. They use techniques such as inheritance, mutation, selection, and crossover to evolve solutions to optimization problems.

### Features
- **Selection**: Tournament and roulette wheel selection
- **Crossover**: Single-point and multi-point crossover
- **Mutation**: Bit-flip and gaussian mutation
- **Fitness Evaluation**: Customizable fitness functions

### Applications
- **Image Compression**: GSEA (Genetic Search for Efficient Algorithms) implementation
- **Optimization Problems**: Function optimization and parameter tuning
- **Pilot Training**: GA-based pilot behavior simulation

### Usage
```bash
# Java Implementation
cd genetic_algorithm/JavaCode/gaPilot
mvn compile
mvn exec:java -Dexec.mainClass="se.mosverkstad.mosjava.gaPilot.Main"

# JavaScript Implementation
cd genetic_algorithm/JavaScriptCode/compressImageGSEA
node main.js
```

## 📊 Bayes Algorithm

### Description
Bayesian algorithms use Bayes' theorem to update probability estimates as new evidence becomes available. They're fundamental in machine learning for classification and prediction tasks.

### Features
- **Naive Bayes Classifier**: Text classification and spam detection
- **Bayesian Networks**: Probabilistic graphical models
- **Prior/Posterior Probability**: Belief updating mechanisms
- **Maximum A Posteriori (MAP)**: Parameter estimation

### Applications
- **Text Classification**: Document categorization and sentiment analysis
- **Medical Diagnosis**: Disease prediction based on symptoms
- **Recommendation Systems**: User preference modeling

### Usage
```bash
cd bayes_algorithm/JavaScriptCode
node bayes_classifier.js
```

## 🚀 Getting Started

### Prerequisites
- **Java**: JDK 8 or higher
- **Maven**: For Java project management
- **Node.js**: For JavaScript implementations
- **Git**: For version control

### Installation
```bash
git clone <repository-url>
cd artificial_intelligence_algorithm

# For Java projects
cd genetic_algorithm/JavaCode/gaPilot
mvn install

# For JavaScript projects
cd bayes_algorithm/JavaScriptCode
npm install
```

## 📖 Algorithm Details

### Genetic Algorithm Parameters
- **Population Size**: 50-200 individuals
- **Crossover Rate**: 0.7-0.9
- **Mutation Rate**: 0.01-0.1
- **Selection Method**: Tournament selection
- **Termination**: Max generations or fitness threshold

### Bayes Algorithm Configuration
- **Smoothing**: Laplace smoothing for zero probabilities
- **Feature Selection**: Chi-square and mutual information
- **Model Validation**: K-fold cross-validation
- **Probability Estimation**: Maximum likelihood estimation

## 🔧 Configuration

### Genetic Algorithm Config
```java
GeneticAlgorithm ga = new GeneticAlgorithm.Builder()
    .populationSize(100)
    .crossoverRate(0.8)
    .mutationRate(0.05)
    .maxGenerations(1000)
    .build();
```

### Bayes Algorithm Config
```javascript
const bayesClassifier = new BayesClassifier({
    smoothing: 1.0,
    features: ['word_count', 'length', 'sentiment'],
    validation: 'k-fold'
});
```

## 📈 Performance Metrics

### Genetic Algorithm
- **Convergence Rate**: Generations to optimal solution
- **Diversity Index**: Population genetic diversity
- **Fitness Evolution**: Best/average fitness over time
- **Success Rate**: Percentage of successful runs

### Bayes Algorithm
- **Accuracy**: Correct predictions / Total predictions
- **Precision**: True positives / (True positives + False positives)
- **Recall**: True positives / (True positives + False negatives)
- **F1-Score**: Harmonic mean of precision and recall

## 🧪 Testing

```bash
# Run Java tests
cd genetic_algorithm/JavaCode/gaPilot
mvn test

# Run JavaScript tests
cd bayes_algorithm/JavaScriptCode
npm test
```

## 📚 References

### Genetic Algorithms
- Holland, J.H. (1992). "Adaptation in Natural and Artificial Systems"
- Goldberg, D.E. (1989). "Genetic Algorithms in Search, Optimization, and Machine Learning"
- Mitchell, M. (1996). "An Introduction to Genetic Algorithms"

### Bayesian Methods
- Bishop, C.M. (2006). "Pattern Recognition and Machine Learning"
- Murphy, K.P. (2012). "Machine Learning: A Probabilistic Perspective"
- Gelman, A. et al. (2013). "Bayesian Data Analysis"

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/algorithm-improvement`)
3. Commit changes (`git commit -am 'Add new selection method'`)
4. Push to branch (`git push origin feature/algorithm-improvement`)
5. Create Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Authors

- **Sanders Wang** - Initial implementation and documentation

## 🔗 Related Projects

- [DEAP](https://github.com/DEAP/deap) - Distributed Evolutionary Algorithms in Python
- [scikit-learn](https://github.com/scikit-learn/scikit-learn) - Machine Learning in Python
- [Weka](https://www.cs.waikato.ac.nz/ml/weka/) - Machine Learning Workbench

## 📞 Support

For questions and support:
- Create an issue in the repository
- Check existing documentation
- Review algorithm references

---

*This repository serves as an educational resource for understanding fundamental AI algorithms and their practical implementations.*