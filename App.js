import { useState }  from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { Image } from 'expo-image'

export default function App() {
  const [cep, setCep] = useState('')
  const [endereco, setEndereco] = useState({
    logradouro: '',
    bairro: '',
    localidade: '',
    uf: ''
  })

  async function buscaCep(){
    console.log(cep)
    return fetch(
      `https://viacep.com.br/ws/${cep}/json/`,
      {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      }
    )
    .then(res => res.json())
    .then((data) =>{
      console.log(data)
      setEndereco(
        {
          logradouro: data.logradouro,
          bairro: data.bairro,
          localidade: data.localidade,
          uf: data.uf
        }
      )
      .catch((error) => {
        console.error('Erro:', error)
      })
    })
  }
  return(
    
  )

}