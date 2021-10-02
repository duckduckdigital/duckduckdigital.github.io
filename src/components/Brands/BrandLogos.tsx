import { chakra, HTMLChakraProps } from "@chakra-ui/react"
import * as React from "react"

export const Finnik = (props: HTMLChakraProps<"svg">) => (
  <chakra.svg h="0.64em" viewBox="0 0 103 21" fill="none" {...props}>
    <path
      d="M.324 21V0H12v2.324H5v7h4.676v2.352H5V21H.324zM19 21V0h4.648v21H19zM30.648 21V0h1.092l12.908 11.676V0H47v21h-1.064L33 9.324V21h-2.352zM51.648 21V0h1.092l12.908 11.676V0H68v21h-1.064L54 9.324V21h-2.352zM75 21V0h4.648v21H75zM86.648 21V0h4.676v8.568L98.884 0H103l-9.352 10.5L103 21h-4.676l-7-8.176V21h-4.676z"
      fill="currentcolor"
    />
  </chakra.svg>
)

export const WorkScout = (props: HTMLChakraProps<"svg">) => (
  <chakra.svg h="0.8em" viewBox="0 0 164 22" fill="none" {...props}>
    <path
      d="M34.05 20l-2.3-17.5h3.275l1.7 15.2h.45l2.2-15.2h5.7l2.2 15.2h.45l1.7-15.2H52.7L50.4 20h-5.7L42.45 4.45H42L39.75 20h-5.7zM60.215 20.35c-1.234 0-2.342-.25-3.326-.75a5.624 5.624 0 01-2.325-2.175c-.566-.95-.85-2.092-.85-3.425v-.4c0-1.333.284-2.475.85-3.425A5.624 5.624 0 0156.89 8c.984-.5 2.092-.75 3.325-.75 1.234 0 2.342.25 3.325.75a5.625 5.625 0 012.326 2.175c.566.95.85 2.092.85 3.425v.4c0 1.333-.284 2.475-.85 3.425A5.625 5.625 0 0163.54 19.6c-.984.5-2.092.75-3.325.75zm0-2.8c.966 0 1.766-.308 2.4-.925.633-.633.95-1.533.95-2.7v-.25c0-1.167-.317-2.058-.95-2.675-.617-.633-1.417-.95-2.4-.95-.967 0-1.767.317-2.4.95-.634.617-.95 1.508-.95 2.675v.25c0 1.167.316 2.067.95 2.7.633.617 1.433.925 2.4.925zM68.872 20V7.6h3.1V9h.45c.183-.5.483-.867.9-1.1.433-.233.933-.35 1.5-.35h1.5v2.8h-1.55c-.8 0-1.458.217-1.975.65-.517.417-.775 1.067-.775 1.95V20h-3.15zM78.034 20V2.5h3.15v9.675h.45l4.1-4.575h4.1l-5.725 6 5.925 6.4h-4.05l-4.35-4.925h-.45V20h-3.15zM102.968 20.35c-1.35 0-2.542-.242-3.575-.725-1.033-.483-1.841-1.175-2.425-2.075-.583-.9-.875-1.983-.875-3.25v-.7h3.25v.7c0 1.05.325 1.842.975 2.375.65.517 1.533.775 2.65.775 1.133 0 1.975-.225 2.525-.675.567-.45.85-1.025.85-1.725 0-.483-.141-.875-.425-1.175-.266-.3-.667-.542-1.2-.725-.517-.2-1.15-.383-1.9-.55l-.575-.125c-1.2-.267-2.233-.6-3.1-1-.85-.417-1.508-.958-1.975-1.625-.45-.667-.675-1.533-.675-2.6 0-1.067.25-1.975.75-2.725.517-.767 1.234-1.35 2.15-1.75.933-.417 2.025-.625 3.275-.625s2.358.217 3.325.65c.983.417 1.75 1.05 2.3 1.9.567.833.85 1.883.85 3.15v.75h-3.25v-.75c0-.667-.133-1.2-.4-1.6a2.113 2.113 0 00-1.1-.9c-.483-.2-1.058-.3-1.725-.3-1 0-1.742.192-2.225.575-.466.367-.7.875-.7 1.525 0 .433.109.8.325 1.1.233.3.575.55 1.025.75.45.2 1.025.375 1.725.525l.575.125c1.25.267 2.333.608 3.25 1.025.933.417 1.659.967 2.175 1.65.517.683.775 1.558.775 2.625s-.275 2.008-.825 2.825c-.533.8-1.3 1.433-2.3 1.9-.983.45-2.15.675-3.5.675zM117.229 20.35c-1.2 0-2.291-.25-3.275-.75a5.67 5.67 0 01-2.3-2.175c-.566-.95-.85-2.1-.85-3.45v-.35c0-1.35.284-2.5.85-3.45a5.67 5.67 0 012.3-2.175c.984-.5 2.075-.75 3.275-.75 1.184 0 2.2.208 3.05.625.85.417 1.534.992 2.05 1.725a5.757 5.757 0 011.05 2.45l-3.05.65c-.066-.5-.216-.95-.45-1.35a2.494 2.494 0 00-1-.95c-.416-.233-.941-.35-1.575-.35a3.53 3.53 0 00-1.725.425c-.5.267-.9.675-1.2 1.225-.283.533-.425 1.192-.425 1.975v.25c0 .783.142 1.45.425 2 .3.533.7.942 1.2 1.225.517.267 1.092.4 1.725.4.95 0 1.667-.242 2.15-.725.5-.5.817-1.15.95-1.95l3.05.725a6.841 6.841 0 01-1.125 2.425c-.516.717-1.2 1.283-2.05 1.7-.85.417-1.866.625-3.05.625zM131.203 20.35c-1.234 0-2.342-.25-3.325-.75a5.616 5.616 0 01-2.325-2.175c-.567-.95-.85-2.092-.85-3.425v-.4c0-1.333.283-2.475.85-3.425A5.616 5.616 0 01127.878 8c.983-.5 2.091-.75 3.325-.75 1.233 0 2.341.25 3.325.75a5.628 5.628 0 012.325 2.175c.566.95.85 2.092.85 3.425v.4c0 1.333-.284 2.475-.85 3.425a5.628 5.628 0 01-2.325 2.175c-.984.5-2.092.75-3.325.75zm0-2.8c.966 0 1.766-.308 2.4-.925.633-.633.95-1.533.95-2.7v-.25c0-1.167-.317-2.058-.95-2.675-.617-.633-1.417-.95-2.4-.95-.967 0-1.767.317-2.4.95-.634.617-.95 1.508-.95 2.675v.25c0 1.167.316 2.067.95 2.7.633.617 1.433.925 2.4.925zM144.585 20.2c-.966 0-1.816-.217-2.55-.65a4.619 4.619 0 01-1.675-1.85c-.4-.783-.6-1.683-.6-2.7V7.6h3.15v7.15c0 .933.225 1.633.675 2.1.467.467 1.125.7 1.975.7.967 0 1.717-.317 2.25-.95.534-.65.8-1.55.8-2.7V7.6h3.15V20h-3.1v-1.625h-.45c-.2.417-.575.825-1.125 1.225-.55.4-1.383.6-2.5.6zM159.266 20c-.817 0-1.484-.25-2-.75-.5-.517-.75-1.2-.75-2.05v-7h-3.1V7.6h3.1V3.75h3.15V7.6h3.4v2.6h-3.4v6.45c0 .5.233.75.7.75h2.4V20h-3.5z"
      fill="currentcolor"
    />
    <path
      d="M3 0h19l-3 6H0l3-6zM3 8h19l-3 6H0l3-6zM3 16h19l-3 6H0l3-6z"
      fill="currentcolor"
    />
  </chakra.svg>
)

export const ChatMonkey = (props: HTMLChakraProps<"svg">) => (
  <chakra.svg h="1em" viewBox="0 0 152 27" fill="none" {...props}>
    <path
      d="M45.328 16.326c0 .765-.138 1.432-.415 2.002a4.413 4.413 0 01-1.062 1.403 4.4 4.4 0 01-1.428.818c-.521.188-1.022.281-1.502.281a5.297 5.297 0 01-2.331-.55c-.757-.357-1.437-.919-2.039-1.684-.594-.773-1.074-1.762-1.44-2.966-.358-1.213-.537-2.665-.537-4.358 0-1.131.085-2.14.256-3.027.18-.887.415-1.669.708-2.344.301-.676.651-1.25 1.05-1.721.407-.48.842-.867 1.306-1.16.464-.301.944-.52 1.44-.66a5.44 5.44 0 011.465-.207c.725 0 1.347.102 1.868.305.529.204.964.464 1.306.782a3.044 3.044 0 01.842 3.222 2.248 2.248 0 01-.402.745c-.171.203-.375.358-.61.464a1.829 1.829 0 01-.758.159 2.02 2.02 0 01-1.294-.476 1.87 1.87 0 01-.439-.562 1.805 1.805 0 01-.159-.769c.008-.163.029-.334.061-.513.033-.154.082-.321.147-.5.073-.187.179-.375.317-.562a1.522 1.522 0 00-.39-.268 1.994 1.994 0 00-.379-.159 3.697 3.697 0 00-.415-.073 1.31 1.31 0 00-.842.293c-.244.195-.456.468-.635.818-.179.341-.33.748-.452 1.22s-.22.985-.292 1.538a27.452 27.452 0 00-.147 1.746 33.872 33.872 0 00-.049 1.831c0 .928.049 1.843.147 2.747.105.895.272 1.7.5 2.417.236.708.545 1.281.928 1.72.39.432.867.648 1.428.648a2.01 2.01 0 00.928-.293c.122-.073.24-.163.354-.269.114-.114.215-.252.305-.415a2.38 2.38 0 00.232-.586c.065-.22.106-.476.122-.769a1.241 1.241 0 01-.476.086c-.195 0-.387-.041-.574-.122a1.871 1.871 0 01-.488-.354 1.865 1.865 0 01-.354-.538 1.768 1.768 0 01-.134-.695c0-.383.085-.696.256-.94.179-.253.383-.452.61-.598.228-.147.452-.249.672-.306.22-.065.374-.097.464-.097.065 0 .166.012.305.036a1.7 1.7 0 01.464.135c.179.073.358.183.537.33.187.138.354.329.5.573.155.244.281.55.379.916.097.358.146.793.146 1.306zM50.174 1.42a464.526 464.526 0 00-.183 3.15 195.61 195.61 0 00-.147 3.15c.285-.537.602-.952.952-1.245.35-.301.68-.521.99-.66.357-.162.72-.26 1.086-.293.586 0 1.086.143 1.501.428.415.285.757.691 1.025 1.22.269.53.464 1.168.586 1.917.122.74.183 1.57.183 2.49 0 1.538-.052 3.027-.158 4.468a25.628 25.628 0 01-.635 4.2l-2.856-.343c.187-.968.33-1.871.427-2.71.106-.838.183-1.57.232-2.197.057-.732.09-1.404.097-2.014 0-.773-.012-1.444-.036-2.014-.017-.578-.073-1.054-.171-1.428-.09-.383-.232-.668-.427-.855-.196-.187-.468-.28-.818-.28-.269.04-.533.203-.794.488a2.865 2.865 0 00-.341.463c-.114.188-.232.42-.354.696a8.511 8.511 0 00-.33.952c-.106.367-.2.79-.28 1.27-.025.83-.041 1.656-.05 2.478V18.755c0 .52.008 1.038.025 1.55l-2.771-.06c.09-1.49.154-2.98.195-4.469a142.205 142.205 0 00-.012-9.448 171.21 171.21 0 00-.244-4.956l3.308.049zM64.065 20.5a21.64 21.64 0 01-.134-.769 12.1 12.1 0 01-.098-.805c-.374.553-.822.976-1.343 1.27-.52.3-1.09.451-1.709.451-.317 0-.643-.053-.976-.159a2.314 2.314 0 01-.916-.525c-.268-.252-.492-.594-.671-1.025-.171-.44-.257-.993-.257-1.66 0-.554.082-1.034.245-1.44.162-.416.374-.778.634-1.087.26-.31.554-.578.88-.806.325-.228.646-.431.964-.61.325-.18.634-.346.927-.5a4.25 4.25 0 00.72-.464 6.12 6.12 0 00.928-.904c.269-.325.484-.663.647-1.013-.032-.561-.093-1.021-.183-1.38-.081-.365-.191-.654-.33-.866-.138-.22-.309-.37-.512-.452a1.595 1.595 0 00-.672-.134c-.374 0-.691.081-.952.244-.252.163-.46.358-.622.586.203.13.358.269.464.415.114.147.199.29.256.427.065.155.102.314.11.477 0 .553-.159.976-.476 1.269-.31.293-.708.44-1.197.44-.252 0-.484-.058-.695-.171a1.916 1.916 0 01-.562-.5 2.52 2.52 0 01-.366-.758 3.245 3.245 0 01-.134-.952c0-.342.077-.704.232-1.086.154-.383.402-.737.744-1.062.342-.334.781-.607 1.319-.818.537-.22 1.188-.33 1.953-.33.765 0 1.42.15 1.965.452.545.293.993.688 1.343 1.184a4.81 4.81 0 01.757 1.697c.162.643.244 1.306.244 1.99 0 .512-.004 1.07-.012 1.672-.008.602-.013 1.22-.013 1.855 0 .53.005 1.058.013 1.587.008.53.024 1.042.048 1.538.025.489.057.953.098 1.392.04.431.094.818.159 1.16l-2.82.17zm-.183-7.153c-.285.342-.59.635-.916.88-.244.17-.508.361-.793.573a8.905 8.905 0 00-.781.671 4.21 4.21 0 00-.599.745 1.475 1.475 0 00-.231.781c0 .366.089.68.268.94.18.26.431.39.757.39.301 0 .57-.08.806-.244a2.71 2.71 0 00.622-.598c.187-.244.342-.504.464-.78a6.42 6.42 0 00.305-.758l.098-2.6zM73.22 1.445a90.184 90.184 0 00-.159 2.478l-.122 2.43a47.89 47.89 0 011.062-.037c.35-.016.708-.037 1.074-.061l.049 3.125c-.39-.065-.777-.118-1.16-.159a28.61 28.61 0 00-1.123-.097 88.18 88.18 0 00-.048 2.05v2.051c0 1.237.012 2.466.036 3.687.033 1.22.082 2.45.147 3.686l-3.186-.049c.105-1.912.19-3.82.256-5.725.073-1.912.122-3.837.146-5.774-.341.017-.683.037-1.025.061a51.33 51.33 0 00-1.05.061l.098-2.893c.334.025.663.045.989.061.333.008.663.02.988.037 0-.814-.008-1.624-.024-2.43l-.049-2.453 3.1-.049zM95.948 20.305l-3.357.244c.074-1.074.13-2.059.171-2.954.049-.895.082-1.672.098-2.331.024-.765.037-1.461.037-2.088 0-.293-.005-.622-.013-.989-.008-.309-.02-.679-.036-1.11a51.738 51.738 0 00-.05-1.429c-.21.985-.398 1.836-.56 2.552-.155.708-.281 1.294-.38 1.758-.121.545-.219 1-.292 1.367-.114.496-.216.992-.305 1.489a35.96 35.96 0 00-.232 1.355c-.073.48-.126.915-.159 1.306l-3.125-.024c-.17-1.058-.346-2.071-.525-3.04-.17-.976-.35-1.916-.537-2.82a88.074 88.074 0 00-.561-2.649 84.136 84.136 0 00-.599-2.563c-.04.814-.069 1.55-.085 2.21a66.673 66.673 0 00.085 5.64c.074 1.236.171 2.46.293 3.673l-3.6.098c.056-.586.105-1.217.146-1.892.04-.684.073-1.371.098-2.063.032-.7.056-1.384.073-2.05.016-.676.028-1.307.036-1.893.008-.586.013-1.107.013-1.562a63.033 63.033 0 000-2.625c0-.586-.009-1.184-.025-1.794-.008-.619-.02-1.221-.037-1.807a37.786 37.786 0 00-.073-1.587c.39.016.761.029 1.111.037.35.008.68.012.989.012.79 0 1.404-.012 1.843-.037.26-.008.488-.02.684-.036.114 1.033.236 2.042.366 3.027a97.246 97.246 0 00.977 5.688c.195.92.402 1.84.622 2.76.293-1.034.574-2.048.842-3.04.269-.993.513-1.974.733-2.942.22-.969.41-1.929.573-2.881.163-.952.29-1.9.379-2.844.301.016.582.028.842.036a23.505 23.505 0 001.904-.012c.326-.016.595-.037.806-.06.244-.025.444-.054.598-.086-.065.854-.118 1.7-.158 2.539-.041.838-.074 1.635-.098 2.392-.016.757-.028 1.453-.037 2.088v2.417a199.141 199.141 0 00.183 4.846c.041.635.09 1.265.147 1.892.057.627.122 1.22.195 1.782zM102.43 20.696c-.806 0-1.502-.175-2.088-.525a4.283 4.283 0 01-1.44-1.465c-.374-.627-.651-1.371-.83-2.234a13.88 13.88 0 01-.269-2.82c0-1.18.106-2.262.318-3.247.211-.984.52-1.83.927-2.539.415-.708.924-1.257 1.526-1.648.611-.399 1.31-.598 2.1-.598.797 0 1.485.167 2.063.5a4.057 4.057 0 011.428 1.404c.383.603.663 1.323.842 2.161.179.838.269 1.762.269 2.771 0 .52-.033 1.087-.098 1.697-.057.61-.158 1.22-.305 1.83-.138.611-.325 1.201-.561 1.77a6.11 6.11 0 01-.892 1.502 4.09 4.09 0 01-1.281 1.05c-.489.26-1.058.39-1.709.39zm1.904-9.143c0-.619-.028-1.172-.085-1.66a5.258 5.258 0 00-.281-1.258c-.122-.342-.281-.602-.476-.781a.93.93 0 00-.684-.28c-.293 0-.565.154-.818.463-.252.31-.476.757-.671 1.343-.187.586-.338 1.302-.452 2.148a22.855 22.855 0 00-.159 2.845c0 .683.033 1.298.098 1.843.065.537.163.997.293 1.38.13.374.289.663.476.866a.938.938 0 00.684.293c.26 0 .492-.106.696-.317.203-.22.378-.513.524-.88.155-.366.285-.789.391-1.269.114-.488.204-.997.269-1.526.065-.537.114-1.082.146-1.636.033-.553.049-1.078.049-1.574zM112.378 6.475l-.073 1c.268-.447.553-.789.854-1.025.309-.236.594-.403.855-.5.26-.098.476-.15.647-.159a17.1 17.1 0 01.293-.012c.602 0 1.127.138 1.574.415.448.277.818.68 1.111 1.208.293.521.509 1.16.647 1.917.147.748.22 1.599.22 2.551 0 .7-.012 1.416-.037 2.149a32.28 32.28 0 01-.122 2.172 28.41 28.41 0 01-.244 2.1 15.668 15.668 0 01-.403 1.953l-2.844-.342a41.73 41.73 0 00.439-2.71c.106-.838.184-1.57.232-2.197.057-.732.09-1.404.098-2.014 0-.773-.024-1.444-.073-2.014-.049-.578-.139-1.054-.269-1.428-.122-.383-.293-.668-.512-.855-.22-.187-.501-.28-.843-.28-.228.048-.456.21-.683.488-.196.236-.403.614-.623 1.135-.22.513-.411 1.237-.574 2.173-.024.635-.04 1.265-.048 1.892v3.894c0 .683.008 1.456.024 2.32l-2.771-.062c.024-.83.041-1.709.049-2.637.016-.935.024-1.973.024-3.112a252.333 252.333 0 00-.122-8.069l3.174.049zM123.791 1.47a302.913 302.913 0 00-.354 6.128c-.033.87-.057 1.705-.073 2.502-.017.798-.025 1.607-.025 2.43.391-.432.753-.892 1.087-1.38.333-.497.635-1.005.903-1.526.277-.529.517-1.066.72-1.611a16.74 16.74 0 00.537-1.612l3.309.293c-.375.79-.745 1.49-1.111 2.1-.367.61-.721 1.147-1.062 1.611-.334.456-.647.843-.94 1.16-.285.317-.541.578-.769.781.341.114.639.248.891.403.252.155.46.301.622.44.196.162.358.333.489.512.154.252.276.541.366.867.098.317.179.655.244 1.013.073.358.142.733.208 1.123.073.383.162.77.268 1.16.106.39.244.777.415 1.16.171.374.395.732.672 1.074h-3.248a10.245 10.245 0 01-.402-1.258 31.954 31.954 0 01-.245-1.147c-.073-.399-.126-.79-.158-1.172a4.003 4.003 0 00-.427-1.33 2.445 2.445 0 00-.342-.489 2.009 2.009 0 00-.476-.427 2.119 2.119 0 00-.623-.305 2.463 2.463 0 00-.806-.122h-.122c0 .92.004 1.9.013 2.942.016 1.041.044 2.213.085 3.515l-3.027-.06c.073-1.148.138-2.194.195-3.138.057-.944.102-1.827.134-2.649.041-.83.069-1.62.086-2.368.024-.749.036-1.506.036-2.27 0-.578-.004-1.173-.012-1.783a80.733 80.733 0 00-.049-1.94c-.016-.684-.04-1.409-.073-2.174-.033-.773-.069-1.607-.11-2.502l3.174.049zM140.014 17.375c0 .48-.11.932-.33 1.355-.22.424-.517.79-.891 1.1-.374.308-.814.553-1.318.732a4.786 4.786 0 01-1.612.268c-.382 0-.769-.053-1.159-.159a3.703 3.703 0 01-1.123-.524 4.672 4.672 0 01-1.014-.965 5.965 5.965 0 01-.83-1.465 10.64 10.64 0 01-.549-2.026c-.13-.781-.195-1.677-.195-2.686 0-.952.065-1.794.195-2.527a9.589 9.589 0 01.549-1.916 5.487 5.487 0 01.818-1.367c.309-.375.639-.676.989-.904a3.679 3.679 0 011.099-.5 4.521 4.521 0 012.673.122c.488.171.915.427 1.282.77.366.34.655.764.866 1.269.22.496.33 1.07.33 1.72 0 .587-.122 1.18-.366 1.783a5.84 5.84 0 01-1.062 1.697 8.123 8.123 0 01-1.758 1.453c-.692.43-1.489.773-2.393 1.025.049.504.118.964.208 1.38.098.414.216.768.354 1.061.146.293.313.521.5.684.196.163.419.244.672.244.162-.008.317-.037.464-.085.13-.041.26-.106.39-.196.139-.09.253-.22.342-.39a1.226 1.226 0 01-.488-.379 2.107 2.107 0 01-.257-.44 1.56 1.56 0 01-.109-.512c0-.39.077-.708.231-.952a1.86 1.86 0 01.55-.574 1.95 1.95 0 01.647-.28 2.21 2.21 0 01.525-.086c.138 0 .305.028.5.085.204.057.399.167.586.33.187.163.346.395.476.696.138.293.208.68.208 1.16zm-3.015-7.678c0-.293-.029-.57-.086-.83a2.33 2.33 0 00-.232-.696 1.275 1.275 0 00-.378-.463.779.779 0 00-.513-.184c-.334 0-.606.155-.818.464-.211.301-.382.704-.513 1.209-.13.504-.219 1.086-.268 1.745-.049.66-.073 1.347-.073 2.063v.891a6.2 6.2 0 001.147-.78c.358-.302.663-.631.916-.99a4.52 4.52 0 00.598-1.16c.146-.406.22-.83.22-1.269zM151.231 6.829c-.048.48-.089.968-.122 1.464l-.097 1.465-.074 1.429a191.368 191.368 0 00-.158 4.114c-.049.96-.078 1.912-.086 2.856 0 .936-.028 1.827-.085 2.673a15.5 15.5 0 01-.33 2.368c-.154.733-.411 1.363-.769 1.892a3.646 3.646 0 01-1.452 1.258c-.603.3-1.38.451-2.332.451-.716 0-1.29-.105-1.721-.317-.423-.203-.749-.456-.977-.757a2.331 2.331 0 01-.451-.94 4.723 4.723 0 01-.098-.891c0-.277.041-.537.122-.781.09-.236.212-.444.366-.623a1.72 1.72 0 01.562-.427c.228-.106.484-.159.769-.159.301 0 .57.057.806.171.236.114.431.26.585.44.163.187.285.394.367.622.081.228.122.456.122.684-.008.13-.037.264-.086.403-.04.114-.114.24-.219.378a1.86 1.86 0 01-.415.427c.097.041.187.065.268.073.09.017.175.025.256.025.212 0 .432-.065.66-.195.236-.122.451-.318.647-.586.195-.269.358-.607.488-1.014.13-.406.203-.89.22-1.452v-1.795c.008-.585.02-1.233.036-1.94-.276.529-.574.94-.891 1.232a3.997 3.997 0 01-.903.635c-.326.163-.655.26-.989.293-.602 0-1.127-.15-1.575-.451-.447-.302-.818-.729-1.111-1.282-.293-.554-.512-1.217-.659-1.99a15.081 15.081 0 01-.207-2.612c0-2.661.183-5.2.549-7.617l3.101.341c-.065.269-.131.562-.196.88-.057.317-.11.646-.158.988-.049.342-.094.688-.135 1.038-.032.341-.065.671-.097.988-.074.75-.135 1.51-.183 2.283 0 .773.024 1.449.073 2.027.049.57.134 1.045.256 1.428.13.374.305.655.525.842.22.187.501.28.842.28.245-.04.481-.21.708-.512.098-.13.2-.293.306-.488.105-.196.211-.436.317-.72.106-.285.207-.619.305-1.001.098-.391.187-.843.269-1.355.024-.635.04-1.213.049-1.734.016-.529.024-1.033.024-1.514 0-.577-.012-1.13-.037-1.66a43.627 43.627 0 00-.11-1.684l3.125.049z"
      fill="currentcolor"
    />
    <path
      d="M22 0H2a2 2 0 00-2 2v14a2 2 0 002 2h3v6l8-6h9a2 2 0 002-2V2a2 2 0 00-2-2zM12 13v-3H5V8h7V5l6 4-6 4z"
      fill="currentcolor"
    />
  </chakra.svg>
)

export const Plumtic = (props: HTMLChakraProps<"svg">) => (
  <chakra.svg h="1em" viewBox="0 0 128 24" fill="none" {...props}>
    <path
      d="M36.224 6.306h4.471a8.83 8.83 0 011.768.17 3.852 3.852 0 011.445.595c.42.272.748.646.986 1.122.25.465.374 1.054.374 1.768 0 .703-.113 1.292-.34 1.768a2.9 2.9 0 01-.935 1.139 3.897 3.897 0 01-1.411.612 8.67 8.67 0 01-1.768.17h-1.938v4.692h-2.652V6.306zm2.652 5.1h1.768c.238 0 .465-.023.68-.068.227-.045.425-.119.595-.221.181-.113.323-.26.425-.442.113-.193.17-.43.17-.714 0-.306-.074-.55-.221-.731a1.307 1.307 0 00-.544-.442 2.102 2.102 0 00-.731-.187 6.31 6.31 0 00-.782-.051h-1.36v2.856zM49.924 6.306h2.652v9.588h4.913v2.448h-7.565V6.306zM71.992 13.701c0 .714-.108 1.371-.323 1.972a4.283 4.283 0 01-.97 1.564c-.418.442-.945.788-1.58 1.037-.635.25-1.366.374-2.193.374-.839 0-1.576-.125-2.21-.374a4.483 4.483 0 01-1.598-1.037 4.398 4.398 0 01-.952-1.564 5.804 5.804 0 01-.323-1.972V6.306h2.652v7.293c0 .374.056.72.17 1.037.124.317.294.595.51.833.215.227.47.408.765.544.306.125.635.187.986.187s.674-.062.969-.187c.294-.136.55-.317.765-.544.215-.238.38-.516.493-.833.124-.317.187-.663.187-1.037V6.306h2.652v7.395zM77.334 6.306h4.011l2.772 7.854h.033l2.788-7.854h3.995v12.036h-2.652V9.111h-.034l-3.162 9.231h-2.022l-3.044-9.231h-.034v9.231h-2.651V6.306zM98.606 8.652h-3.434V6.306h9.52v2.346h-3.434v9.69h-2.652v-9.69zM108.895 6.306h2.652v12.036h-2.652V6.306zM124.72 9.434a2.59 2.59 0 00-.969-.731c-.374-.17-.81-.255-1.309-.255-.499 0-.963.096-1.394.289a3.377 3.377 0 00-1.105.816c-.306.34-.55.748-.731 1.224-.17.476-.255.992-.255 1.547 0 .567.085 1.088.255 1.564.181.465.425.873.731 1.224.306.34.663.606 1.071.799.419.193.867.289 1.343.289.544 0 1.026-.113 1.445-.34a2.879 2.879 0 001.037-.952l2.21 1.649a4.602 4.602 0 01-1.938 1.581c-.782.34-1.587.51-2.414.51-.941 0-1.808-.147-2.601-.442a6.025 6.025 0 01-2.057-1.258 5.935 5.935 0 01-1.36-2.006c-.317-.782-.476-1.655-.476-2.618 0-.963.159-1.836.476-2.618a5.756 5.756 0 011.36-1.989 5.892 5.892 0 012.057-1.275c.793-.295 1.66-.442 2.601-.442.34 0 .691.034 1.054.102.374.057.737.153 1.088.289.363.136.708.317 1.037.544.329.227.623.504.884.833l-2.04 1.666z"
      fill="currentcolor"
    />
    <path
      d="M8 14.991V4.813A9.792 9.792 0 1016.945 21.8L8 14.991z"
      fill="currentcolor"
    />
    <path
      d="M11 0h-1v14l11.938 9.089.578-.844A14.39 14.39 0 0025 14.2 14.117 14.117 0 0011 0z"
      fill="currentcolor"
    />
  </chakra.svg>
)

export const Lighthouse = (props: HTMLChakraProps<"svg">) => (
  <chakra.svg h="1em" viewBox="0 0 198 39" fill="none" {...props}>
    <path
      d="M60.302 28.548c.132.506.253 1.144.363 1.914.132.77.198 1.408.198 1.914-2.2.022-4.257.099-6.171.231-1.914.154-4.147.407-6.699.759-.55-3.762-1.001-7.997-1.353-12.705-.33-4.708-.484-8.811-.462-12.309.704-.22 1.408-.374 2.112-.462.726-.11 1.463-.165 2.211-.165.242 0 .473.011.693.033.242 0 .473.022.693.066a64.111 64.111 0 00-.363 4.455 86.996 86.996 0 00-.099 5.445c0 2.596.055 4.818.165 6.666.11 1.848.286 3.553.528 5.115a31.819 31.819 0 014.059-.693 34.349 34.349 0 014.125-.264zM67.054 5.25a9.425 9.425 0 011.452.165c.44.088.803.209 1.089.363a19.273 19.273 0 00-.66 1.881c-.242.792-.43 1.54-.561 2.244a25.3 25.3 0 01-1.947.198c-.682.022-1.42.022-2.211 0a9.26 9.26 0 01-.264-1.056 8.506 8.506 0 01-.066-1.056c0-.396.033-.781.099-1.155s.154-.704.264-.99a5.532 5.532 0 011.287-.429c.462-.11.968-.165 1.518-.165zm-3.762 8.217a5.681 5.681 0 011.55-.594 7.468 7.468 0 011.882-.231c.308 0 .616.022.924.066.33.022.649.066.957.132-.462 1.76-.836 4.202-1.122 7.326a106.06 106.06 0 00-.43 9.669c-.351.154-.791.275-1.32.363a7.438 7.438 0 01-2.243.132 28.56 28.56 0 01-.495-.066 67.944 67.944 0 01-.462-8.91c.066-2.926.319-5.555.759-7.887zM74.757 20.991c0 1.76.264 3.157.792 4.191.528 1.034 1.21 1.551 2.046 1.551.374 0 .715-.154 1.023-.462.33-.308.616-.77.858-1.386a52.167 52.167 0 00-.297-4.785c-.176-1.672-.407-3.168-.693-4.488l-.462-.066a3.263 3.263 0 00-.462-.033c-.946 0-1.65.451-2.112 1.353-.462.902-.693 2.277-.693 4.125zm9.636 3.432c0 4.466-.715 7.865-2.145 10.197-1.408 2.354-3.421 3.531-6.04 3.531-1.781 0-3.2-.495-4.256-1.485-1.056-.968-1.65-2.233-1.782-3.795a7.97 7.97 0 011.914-1.056 9.977 9.977 0 012.21-.594c.199 1.408.474 2.42.826 3.036.374.638.869.957 1.485.957.77 0 1.386-.583 1.848-1.749.462-1.166.77-2.904.924-5.214-.418.55-.891.957-1.42 1.221a3.856 3.856 0 01-1.748.396c-1.914 0-3.454-.726-4.62-2.178-1.144-1.474-1.716-3.421-1.716-5.841 0-3.014.715-5.324 2.145-6.93 1.452-1.628 3.53-2.442 6.237-2.442.726 0 1.54.088 2.442.264a16.07 16.07 0 012.508.627c.33 1.166.605 2.838.825 5.016.242 2.156.363 4.169.363 6.039zM102.131 18.912c0 1.848-.275 4.015-.825 6.501-.55 2.464-1.122 4.345-1.716 5.643a10.48 10.48 0 01-2.145-.297 12.682 12.682 0 01-2.145-.66 43.306 43.306 0 001.42-5.775c.351-1.936.527-3.729.527-5.379 0-1.232-.12-2.079-.363-2.541-.22-.484-.616-.726-1.188-.726-.528 0-1.078.297-1.65.891-.572.572-1.11 1.386-1.617 2.442-.022.99-.044 1.771-.066 2.343v1.551a74.199 74.199 0 00.264 5.709c-.396.132-1.034.253-1.914.363-.858.088-1.683.132-2.475.132a236.731 236.731 0 01-.429-7.161 194.809 194.809 0 01-.132-6.93c0-1.562.033-3.212.1-4.95.087-1.738.186-3.168.296-4.29.374-.22.902-.385 1.584-.495a11.453 11.453 0 012.178-.198c.308 0 .594.022.858.066.286.022.671.088 1.155.198a78.569 78.569 0 00-.726 4.521c-.198 1.65-.363 3.388-.495 5.214.638-.902 1.353-1.584 2.145-2.046a4.79 4.79 0 012.541-.726c1.65 0 2.86.539 3.63 1.617.792 1.056 1.188 2.717 1.188 4.983zM112.837 22.707a5.851 5.851 0 011.782.429c.616.22 1.155.506 1.617.858-.044 1.738-.495 3.135-1.353 4.191s-2.046 1.584-3.564 1.584c-1.848 0-3.289-.792-4.323-2.376-1.012-1.606-1.518-3.905-1.518-6.897 0-.968.011-1.881.033-2.739.044-.858.11-1.683.198-2.475a24.451 24.451 0 01-1.254-.165c-.396-.088-.77-.187-1.122-.297.022-.55.088-1.067.198-1.551.11-.506.253-.902.429-1.188.264.088.572.165.924.231.374.066.77.121 1.188.165.11-.748.242-1.474.396-2.178.154-.704.319-1.386.495-2.046.924 0 1.848.066 2.772.198.924.11 1.716.275 2.376.495a60.915 60.915 0 00-.495 1.815c-.154.66-.297 1.353-.429 2.079.99.022 1.892.022 2.706 0a48.272 48.272 0 002.244-.165c0 .374-.044.803-.132 1.287-.088.484-.209.957-.363 1.419-.638.11-1.386.187-2.244.231-.836.044-1.727.055-2.673.033a53.166 53.166 0 00-.297 2.937 34.927 34.927 0 00-.099 2.541c0 1.958.11 3.399.33 4.323.22.924.55 1.386.99 1.386.374 0 .66-.341.858-1.023.198-.704.308-1.738.33-3.102zM133.198 18.912c0 1.848-.275 4.015-.825 6.501-.55 2.464-1.122 4.345-1.716 5.643a10.48 10.48 0 01-2.145-.297 12.682 12.682 0 01-2.145-.66 43.306 43.306 0 001.419-5.775c.352-1.936.528-3.729.528-5.379 0-1.232-.121-2.079-.363-2.541-.22-.484-.616-.726-1.188-.726-.528 0-1.078.297-1.65.891-.572.572-1.111 1.386-1.617 2.442-.022.99-.044 1.771-.066 2.343v1.551a74.199 74.199 0 00.264 5.709c-.396.132-1.034.253-1.914.363-.858.088-1.683.132-2.475.132a236.731 236.731 0 01-.429-7.161 194.809 194.809 0 01-.132-6.93c0-1.562.033-3.212.099-4.95.088-1.738.187-3.168.297-4.29.374-.22.902-.385 1.584-.495a11.453 11.453 0 012.178-.198c.308 0 .594.022.858.066.286.022.671.088 1.155.198a78.569 78.569 0 00-.726 4.521c-.198 1.65-.363 3.388-.495 5.214.638-.902 1.353-1.584 2.145-2.046a4.79 4.79 0 012.541-.726c1.65 0 2.86.539 3.63 1.617.792 1.056 1.188 2.717 1.188 4.983zM135.77 22.212c0-3.014.792-5.467 2.376-7.359 1.606-1.914 3.674-2.871 6.204-2.871 1.958 0 3.487.627 4.587 1.881 1.122 1.232 1.683 2.948 1.683 5.148 0 3.212-.77 5.907-2.31 8.085-1.54 2.156-3.619 3.234-6.237 3.234-1.98 0-3.531-.737-4.653-2.211-1.1-1.474-1.65-3.443-1.65-5.907zm9.9-1.551c0-1.936-.198-3.366-.594-4.29-.396-.924-1.001-1.386-1.815-1.386-.748 0-1.386.627-1.914 1.881-.506 1.232-.759 2.783-.759 4.653 0 1.65.22 3.036.66 4.158.462 1.122 1.078 1.683 1.848 1.683.726 0 1.331-.66 1.815-1.98.506-1.342.759-2.915.759-4.719zM158.994 30.33c-2.024 0-3.564-.781-4.62-2.343-1.056-1.584-1.584-3.85-1.584-6.798 0-1.562.154-3.179.462-4.851.308-1.672.638-2.838.99-3.498.396-.088.781-.154 1.155-.198a6.263 6.263 0 011.089-.099c.484 0 .902.033 1.254.099.374.066.66.154.858.264a29.632 29.632 0 00-.594 3.663 37.822 37.822 0 00-.198 3.894c0 2.068.165 3.718.495 4.95.352 1.232.836 1.848 1.452 1.848.682 0 1.199-.693 1.551-2.079.374-1.408.561-3.333.561-5.775 0-.946-.044-1.925-.132-2.937-.088-1.034-.176-1.749-.264-2.145.638-.264 1.419-.473 2.343-.627a14.283 14.283 0 012.673-.264c.11.55.187 1.21.231 1.98.066.748.099 1.518.099 2.31 0 4.114-.66 7.249-1.98 9.405-1.32 2.134-3.267 3.201-5.841 3.201zM176.92 19.572c1.804 1.188 3.003 2.222 3.597 3.102.594.88.891 1.859.891 2.937 0 1.672-.66 3.058-1.98 4.158-1.298 1.1-2.904 1.65-4.818 1.65-1.76 0-3.223-.561-4.389-1.683-1.144-1.144-1.716-2.552-1.716-4.224.44-.198.99-.352 1.65-.462.66-.132 1.232-.187 1.716-.165-.022 1.166.209 2.101.693 2.805.484.682 1.155 1.023 2.013 1.023.638 0 1.133-.176 1.485-.528.374-.374.561-.891.561-1.551 0-.572-.198-1.111-.594-1.617-.374-.528-1.221-1.232-2.541-2.112-1.76-1.188-2.926-2.211-3.498-3.069a5.43 5.43 0 01-.825-2.937c0-1.606.561-2.915 1.683-3.927 1.144-1.034 2.629-1.551 4.455-1.551 1.804 0 3.245.44 4.323 1.32 1.1.858 1.815 2.134 2.145 3.828a6.172 6.172 0 01-1.683.726c-.616.176-1.397.297-2.343.363-.154-1.144-.418-1.98-.792-2.508-.374-.528-.88-.792-1.518-.792-.506 0-.902.154-1.188.462-.264.308-.396.737-.396 1.287 0 .528.187 1.034.561 1.518.374.462 1.21 1.111 2.508 1.947zM189.007 19.044a9.14 9.14 0 002.607.396c.242 0 .484-.011.726-.033.242-.022.407-.044.495-.066.154-.572.264-1.1.33-1.584a7.99 7.99 0 00.132-1.353c0-.66-.099-1.144-.297-1.452-.198-.308-.517-.462-.957-.462-.616 0-1.199.418-1.749 1.254-.55.814-.979 1.914-1.287 3.3zm5.346 4.917c.638.11 1.287.341 1.947.693.66.352 1.21.748 1.65 1.188-.418 1.232-1.342 2.332-2.772 3.3-1.43.946-3.058 1.419-4.884 1.419-2.09 0-3.718-.671-4.884-2.013-1.166-1.364-1.749-3.201-1.749-5.511 0-2.926.869-5.522 2.607-7.788 1.76-2.288 3.806-3.432 6.138-3.432 1.628 0 2.915.451 3.861 1.353.968.88 1.452 2.068 1.452 3.564 0 .704-.077 1.463-.231 2.277a12.011 12.011 0 01-.561 2.211c-.572.264-1.276.462-2.112.594-.836.11-1.87.165-3.102.165a12.5 12.5 0 01-3.102-.396c-.022.352-.044.616-.066.792v.495c0 1.496.22 2.673.66 3.531.462.858 1.089 1.287 1.881 1.287.616 0 1.243-.385 1.881-1.155a6.673 6.673 0 001.386-2.574z"
      fill="currentcolor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.536 5.256A8.19 8.19 0 0014.603 0c7.047 3.373 8.48 8.603 8.48 11.88a7.238 7.238 0 01-4.07 6.537c.006-.114.023-.224.023-.339A6.214 6.214 0 0016 12.716c-.475 1.549-1.175 2.141-1.782 2.657-.685.58-1.254 1.062-1.254 2.705 0 .058.006.114.011.17.006.056.012.112.012.169a7.238 7.238 0 01-4.07-6.537c0-2.884 1.725-4.733 3.62-6.624zm-.786 28.752h8.517a1.415 1.415 0 001.417-1.425l-.01-4.44 6.737-.96a3.694 3.694 0 003.172-3.658V21.25H.417v2.275a3.694 3.694 0 003.172 3.658l6.744.962v4.447a1.417 1.417 0 001.417 1.416z"
      fill="currentcolor"
    />
  </chakra.svg>
)

export const Wakanda = (props: HTMLChakraProps<"svg">) => (
  <chakra.svg h="1em" viewBox="0 0 149 26" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.29 9.645a9.645 9.645 0 01-9.645 9.646 9.645 9.645 0 119.645-9.645zm.781 3.197c.522-1.704.618-3.51.28-5.26A9.64 9.64 0 117.582 20.35a10.895 10.895 0 0012.488-7.508z"
      fill="currentcolor"
    />
    <path
      d="M42.275 21.5L37.375 4H41l3.35 12.975L48 4h2.95l3.675 12.975L57.975 4H61.6l-4.9 17.5h-3.925l-3.3-11.55L46.2 21.5h-3.925zM71.461 9h3.225v12.5h-3.225v-1.475c-.966 1.217-2.325 1.825-4.075 1.825-1.666 0-3.1-.633-4.3-1.9-1.183-1.283-1.775-2.85-1.775-4.7s.592-3.408 1.775-4.675c1.2-1.283 2.634-1.925 4.3-1.925 1.75 0 3.109.608 4.075 1.825V9zm-5.95 8.8c.65.65 1.475.975 2.475.975s1.825-.325 2.475-.975c.667-.667 1-1.517 1-2.55s-.333-1.875-1-2.525c-.65-.667-1.475-1-2.475-1s-1.825.333-2.475 1c-.65.65-.975 1.492-.975 2.525s.325 1.883.975 2.55zM89.136 21.5h-3.75l-4.55-5.675V21.5H77.61V4h3.225v10.5l4.3-5.5h3.85l-5.025 6.175 5.175 6.325zM99.342 9h3.225v12.5h-3.225v-1.475c-.966 1.217-2.325 1.825-4.075 1.825-1.666 0-3.1-.633-4.3-1.9-1.183-1.283-1.775-2.85-1.775-4.7s.592-3.408 1.775-4.675c1.2-1.283 2.633-1.925 4.3-1.925 1.75 0 3.109.608 4.075 1.825V9zm-5.95 8.8c.65.65 1.475.975 2.475.975s1.825-.325 2.475-.975c.667-.667 1-1.517 1-2.55s-.333-1.875-1-2.525c-.65-.667-1.475-1-2.475-1s-1.825.333-2.475 1c-.65.65-.975 1.492-.975 2.525s.325 1.883.975 2.55zM112.442 8.65c1.366 0 2.491.458 3.375 1.375.9.917 1.35 2.183 1.35 3.8V21.5h-3.225v-7.275c0-.833-.225-1.467-.675-1.9-.45-.45-1.05-.675-1.8-.675-.834 0-1.5.258-2 .775s-.75 1.292-.75 2.325v6.75h-3.225V9h3.225v1.4c.783-1.167 2.025-1.75 3.725-1.75zM129.395 4h3.225v17.5h-3.225v-1.475c-.95 1.217-2.3 1.825-4.05 1.825-1.683 0-3.125-.633-4.325-1.9-1.183-1.283-1.775-2.85-1.775-4.7s.592-3.408 1.775-4.675c1.2-1.283 2.642-1.925 4.325-1.925 1.75 0 3.1.608 4.05 1.825V4zm-5.95 13.8c.667.65 1.5.975 2.5.975s1.825-.325 2.475-.975c.65-.667.975-1.517.975-2.55s-.325-1.875-.975-2.525c-.65-.667-1.475-1-2.475-1s-1.833.333-2.5 1c-.65.65-.975 1.492-.975 2.525s.325 1.883.975 2.55zM145.07 9h3.225v12.5h-3.225v-1.475c-.967 1.217-2.325 1.825-4.075 1.825-1.667 0-3.1-.633-4.3-1.9-1.184-1.283-1.775-2.85-1.775-4.7s.591-3.408 1.775-4.675c1.2-1.283 2.633-1.925 4.3-1.925 1.75 0 3.108.608 4.075 1.825V9zm-5.95 8.8c.65.65 1.475.975 2.475.975s1.825-.325 2.475-.975c.666-.667 1-1.517 1-2.55s-.334-1.875-1-2.525c-.65-.667-1.475-1-2.475-1s-1.825.333-2.475 1c-.65.65-.975 1.492-.975 2.525s.325 1.883.975 2.55z"
      fill="currentcolor"
    />
  </chakra.svg>
)
