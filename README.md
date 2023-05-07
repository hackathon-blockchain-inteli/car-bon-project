# Carbon - Claim Offset Carbon just by driving 
Carbon is a platform that allows individuals to claim Offset Carbon based on the measurement of the amount of CO2 emissions from vehicles. This is done through an exchange area -for buying and selling these tokens-, using BTG dol. All of this is possible thanks to the combination of an IoT device, a web platform, and the infinite possibilities of Blockchain.

![lalalalala](https://user-images.githubusercontent.com/99202282/236663803-7883aac4-2f93-41c0-b422-e922dcc6dd2d.png)


## Inteli Blockchain 2023 Challenge - Carbon

## Our team
- Ana Clara Loureiro Müller Zaidan (User Experience, business and front-end development);
- Bruno Otávio Bezerra de Meira (User Experience, business and front-end development);
- Eduardo Santos Barreto (Artificial Intelligence, IoT and back-end development);
- Mariana Silva de Paula (Business and front-end development);
- Vinicios Venâncio Lugli (back-end development and BlockChain);

## Solution
Carbon collects carbon emission data from cars using IoT, encouraging the usage of electric or hybrid cars. The collected data is interpreted and can generate Offset Carbon on the blockchain, which can be sold on the platform to companies that want to even their carbon footprint. The user has access to a dashboard that provides predictions generated by an AI regression model to visualize long-term impact and manage their credits. All transactions use BTG dol - a dollar-backed stablecoin - as currency, ensuring reliability, security, and transparency in the transactions carried out.

The system functionalities include:

- An IoT device used to measure carbon emission, based on a CO2 sensor and an accelerometer;
- An exchange system for buying and selling Offset Carbon;
- A managing area to access how many Tokens you can claim, and a dashboard that provides predictions generated by an AI regression model to visualize long-term impact;
- A transaction system entirely based on the usage of BTG dol - a dollar-backed stablecoin -, ensuring reliability, security, and transparency to all the transactions.

## Folders structure 
|--> Backend<br>
  &emsp;| --> artifacts <br>
  &emsp;| -->src <br>
  &emsp;| &emsp;| -->modules <br>
|--> blockchain<br>
  &emsp;| --> cartesi <br>
  &emsp;| &emsp;| --> AI <br>
  &emsp;| &emsp;| --> errors <br>
  &emsp;| &emsp;| --> modules <br>
  &emsp;| &emsp;| --> std-rootfs <br>
  &emsp;| --> contracts <br>
|--> embedded<br> 
  &emsp;| --> include<br>
  &emsp;| &emsp;| --> sensors <br>
  &emsp;| --> lib<br>
  &emsp;| --> src<br>
  &emsp;| &emsp;| --> sensors <br>
  &emsp;| --> test<br>
  &emsp;| &emsp;| -->modules <br>
  |--> frontend<br>
    &emsp;| --> public<br>
    &emsp;| --> src<br>
    &emsp;| &emsp;| --> assets <br>
    &emsp;| &emsp;| --> componentes <br>
    &emsp;| &emsp;| --> contexts <br>
    &emsp;| &emsp;| --> pages <br>
|--> License<br>
|--> Readme.md<br>

## Technologies

 This project was developed with the following technologies:
 
 ### Front-end:
 - React.js
 - Sass
 - Typescript
 - Ethers
 - Axius
 
 ### Back-end:
 - Typescript
 - Ethers
 - MQTT
 - Node.js
 - Express
 
 ### Embeded/ IoT:
 - C++
 - Framework: Arduíno
 - Plarform.io
 - ESP-32 microcontroller
 - I2C comunication
 - MQTT
 - Gas and Acelerometer sensors
 - OLED display
 
![image](https://user-images.githubusercontent.com/99264876/236664708-5c1daa32-f550-45a9-805e-ab8e991cc541.png)
 
 ### Artificial Intelligence:
 - Python
 
 ### Blockchain:
 - Solidt 0.8.19
 - Cartesi Machine with Custom Rollup runing AI

## Arquithecture
The architecture of a system consists of the structure, behavior, and relationships between software and hardware components. It involves the systematization of interactions that are conceived in the system. The image below demonstrates the architecture of the Carbon development.

![Arquitetura do sistema - CarBon](https://user-images.githubusercontent.com/40807526/236663082-5f4241c2-eced-447b-ae16-1570f060f854.png)

## Layout

You can see this application layout  [clicking here](https://www.figma.com/file/NimQTWAvXkrCFHNCByUp3g/Frontend---CarBon?type=design&node-id=0%3A1&t=JYX38XFl5vKz2shA-1). You'll need a  [Figma](https://www.figma.com/)  account.

## Demo


## License

Distributed under the MIT License. See [License](https://github.com/hackathon-blockchain-inteli/car-bon-project/blob/main/LICENSE) for more information.

## Collaborators 
<table>
  <tr>
    <td align="center">
      <a href="https://www.linkedin.com/in/ana-clara-loureiro-muller-zaidan/">
        <img src="https://media.licdn.com/dms/image/C4E03AQFESfiDsz5Reg/profile-displayphoto-shrink_800_800/0/1646850304947?e=1688601600&v=beta&t=ZjRBXNdeJ_yFPBBZ_b0cX9ly3eWj41qfTrhmCfsCt_U" width="100px;" alt="Ana Clara Müller profile image"/><br>
        <sub>
          <b>Ana Clara Müller</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://www.linkedin.com/in/bruno-omeira/">
        <img src="https://avatars.githubusercontent.com/u/99202553?v=4" width="100px;" alt="Bruno Meira profile image"/><br>
        <sub>
          <b>Bruno Meira</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://www.linkedin.com/in/eduardosbarreto/">
        <img src="https://media.licdn.com/dms/image/D4D03AQHcmdXszbRiEA/profile-displayphoto-shrink_400_400/0/1674764013909?e=1688601600&v=beta&t=SlwqWDqdgfXin1SxXfs1JJ7r122Y6bOJtch5T9hcfpk" width="100px;" alt="Eduardo Barreto profile image"/><br>
        <sub>
          <b>Eduardo Barreto</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://www.linkedin.com/in/mariana-silva-paula/">
        <img src="https://media.licdn.com/dms/image/C4D03AQHSps6wu6sSFg/profile-displayphoto-shrink_800_800/0/1653334808256?e=1688601600&v=beta&t=4ERwwYt_J7oHodDMj_yrqdNFa-tV5zxSFw8cJ4WtG2Y" width="100px;" alt="Mariana Silva profile image"/><br>
        <sub>
          <b>Mariana Silva</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://www.linkedin.com/in/vinicioslugli/">
        <img src="https://media.licdn.com/dms/image/C4D03AQG_4HA0i2JZ9g/profile-displayphoto-shrink_800_800/0/1615483031781?e=1688601600&v=beta&t=lEg0U8P_N5dQneZYdBBJYI-7FjhztQAyBTpZDw2EnuM" width="100px;" alt="Vinicios Lugli profile image"/><br>
        <sub>
          <b>Vinicios Lugli</b>
        </sub>
      </a>
    </td>
  </tr>
</table>
