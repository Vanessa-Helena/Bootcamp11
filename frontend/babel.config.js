module.exports = {
  presets: [
    '@babel/preset-env', // convert funcionalidades de acordo com o ambiente
    '@babel/preset-react' // adiciona as funcionalidades do react e converte para o browser entenda
  ],
  plugins: [
    '@babel/plugin-transform-runtime'
  ]
};