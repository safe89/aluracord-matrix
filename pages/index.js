import appConfig from '../config.json';
import { Box, Button, Text, TextField, Image} from '@skynexui/components'
import React from 'react';
import { useRouter } from 'next/router'

function Titulo(props) {
    const Tag = props.tag || 'h1';
    return (
        <div>
            <Tag>{props.children}</Tag>

            <style jsx>{`
              ${Tag} {
                  color: ${appConfig.theme.colors.neutrals[300]};
                  font-sixe: 24px;
                  font-weight: 600;
              }
            `}</style>
        </div>
    );
}

/*function HomePage() {
    // JSX
    return (
        <div>
            <GlobalStyle></GlobalStyle>
            <Title tag="h2">Boas vindas de volta!</Title>
            <h2>Discord - Alura Matrix</h2>
        </div>
        )
  }

  export default HomePage*/

  export default function PaginaInicial() {
    //const username = 'safe89';
    const [username, setUsername] = React.useState('safe89');
    const roteamento = useRouter();
    const disableButton = username.length <= 2 ? true : false;

    return (
      <>
        <Box
          styleSheet={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            backgroundColor: appConfig.theme.colors.primary[50],
            backgroundImage: 'url(https://images.unsplash.com/photo-1502899576159-f224dc2349fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTd8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80)',
            backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
          }}
        >
          <Box
            styleSheet={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: {
                xs: 'column',
                sm: 'row',
              },
              width: '100%', maxWidth: '700px',
              borderRadius: '5px', padding: '32px', margin: '16px',
              boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
              backgroundColor: appConfig.theme.colors.neutrals[100],
              opacity: "90%"
            }}
          >
            {/* Formul??rio */}
            <Box
              as="form"
              onSubmit={function (event) {
                event.preventDefault();
                console.log('Form submetido!')
                roteamento.push(`/chat?username=${username}`)
                // A forma abaixo ?? a convencional de JS e n??o REact
                //window.location.href = '/chat'
              }}
              styleSheet={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                width: { xs: '100%', sm: '50%' }, textAlign: 'center', marginBottom: '32px'
              }}
            >
              <Titulo tag="h2">Welcome to The Jungle!</Titulo>
              <Text variant="body3" styleSheet={{ marginBottom: '32px', color: appConfig.theme.colors.neutrals[500] }}>
                {appConfig.name}
              </Text>

              <TextField
                value={username}
                onChange={function (event) {
                  console.log('digitando...', event.target.value);
                  // Onde est?? o valor?
                  const valor = event.target.value;
                  // Trocar valor da vari??vel
                  // atrav??s do React que avisa quem precisa
                  setUsername(valor);
                }}
                fullWidth
                textFieldColors={{
                  neutral: {
                    textColor: appConfig.theme.colors.neutrals[100],
                    mainColor: appConfig.theme.colors.neutrals[900],
                    mainColorHighlight: appConfig.theme.colors.primary[100],
                    backgroundColor: appConfig.theme.colors.neutrals[900],
                  },
                }}
              />

              {/* <input
                type="text"
                value={username}
                onChange={function (event) {
                  console.log('digitando...', event.target.value);
                  // Onde est?? o valor?
                  const valor = event.target.value;
                  // Trocar valor da vari??vel
                  // atrav??s do React que avisa quem precisa
                  setUsername(valor);
                }}>
              </input> */}
              <Button
                type='submit'
                label='Entrar'
                disabled = {disableButton}
                fullWidth
                buttonColors={{
                  contrastColor: appConfig.theme.colors.neutrals["100"],
                  mainColor: appConfig.theme.colors.primary[999],
                  mainColorLight: appConfig.theme.colors.primary[998],
                  mainColorStrong: appConfig.theme.colors.primary[997],
                }}
              />
            </Box>
            {/* Formul??rio */}


            {/* Photo Area */}
            <Box
              styleSheet={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                maxWidth: '200px',
                padding: '16px',
                backgroundColor: appConfig.theme.colors.neutrals[900],
                border: '1px solid',
                borderColor: appConfig.theme.colors.neutrals["999"],
                borderRadius: '10px',
                flex: 1,
                minHeight: '240px',
              }}
            >
              { !disableButton &&
                <Image
                  styleSheet={{
                    borderRadius: '50%',
                    marginBottom: '16px',
                  }}
                  src={`https://github.com/${username}.png`}
                />
              }
              <Text
                variant="body4"
                styleSheet={{
                  color: appConfig.theme.colors.neutrals[200],
                  backgroundColor: appConfig.theme.colors.neutrals[900],
                  padding: '3px 10px',
                  borderRadius: '1000px'
                }}
              >
                {disableButton ? '' : username}
              </Text>
            </Box>
            {/* Photo Area */}
          </Box>
        </Box>
      </>
    );
  }