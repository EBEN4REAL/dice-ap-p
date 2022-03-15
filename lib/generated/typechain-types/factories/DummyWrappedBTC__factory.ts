/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  DummyWrappedBTC,
  DummyWrappedBTCInterface,
} from "../DummyWrappedBTC";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MINTER_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "PAUSER_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burnFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "getRoleMember",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleMemberCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60a06040523480156200001157600080fd5b506040518060400160405280601381526020017f5772617070656420425443202844756d6d792900000000000000000000000000815250604051806040016040528060048152602001635742544360e01b81525060088282818181600590805190602001906200008392919062000281565b5080516200009990600690602084019062000281565b50506007805460ff1916905550620000b36000336200011c565b620000df7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6336200011c565b6200010b7f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a336200011c565b505060ff1660805250620003649050565b6200012882826200012c565b5050565b6200014382826200016f60201b620007ab1760201c565b60008281526001602090815260409091206200016a9183906200082f6200020f821b17901c565b505050565b6000828152602081815260408083206001600160a01b038516845290915290205460ff1662000128576000828152602081815260408083206001600160a01b03851684529091529020805460ff19166001179055620001cb3390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b600062000226836001600160a01b0384166200022f565b90505b92915050565b6000818152600183016020526040812054620002785750815460018181018455600084815260208082209093018490558454848252828601909352604090209190915562000229565b50600062000229565b8280546200028f9062000327565b90600052602060002090601f016020900481019282620002b35760008555620002fe565b82601f10620002ce57805160ff1916838001178555620002fe565b82800160010185558215620002fe579182015b82811115620002fe578251825591602001919060010190620002e1565b506200030c92915062000310565b5090565b5b808211156200030c576000815560010162000311565b600181811c908216806200033c57607f821691505b602082108114156200035e57634e487b7160e01b600052602260045260246000fd5b50919050565b60805161139a62000380600039600061027d015261139a6000f3fe608060405234801561001057600080fd5b50600436106101c45760003560e01c806370a08231116100f9578063a457c2d711610097578063d539139311610071578063d5391393146103d1578063d547741f146103f8578063dd62ed3e1461040b578063e63ab1e91461044457600080fd5b8063a457c2d714610398578063a9059cbb146103ab578063ca15c873146103be57600080fd5b80639010d07c116100d35780639010d07c1461034a57806391d148541461037557806395d89b4114610388578063a217fddf1461039057600080fd5b806370a082311461030657806379cc67901461032f5780638456cb591461034257600080fd5b8063313ce567116101665780633f4ba83a116101405780633f4ba83a146102cd57806340c10f19146102d557806342966c68146102e85780635c975abb146102fb57600080fd5b8063313ce5671461027657806336568abe146102a757806339509351146102ba57600080fd5b806318160ddd116101a257806318160ddd1461021957806323b872dd1461022b578063248a9ca31461023e5780632f2ff15d1461026157600080fd5b806301ffc9a7146101c957806306fdde03146101f1578063095ea7b314610206575b600080fd5b6101dc6101d7366004611040565b61046b565b60405190151581526020015b60405180910390f35b6101f9610496565b6040516101e89190611096565b6101dc6102143660046110e5565b610528565b6004545b6040519081526020016101e8565b6101dc61023936600461110f565b610540565b61021d61024c36600461114b565b60009081526020819052604090206001015490565b61027461026f366004611164565b610564565b005b60405160ff7f00000000000000000000000000000000000000000000000000000000000000001681526020016101e8565b6102746102b5366004611164565b61058f565b6101dc6102c83660046110e5565b6105b2565b6102746105f1565b6102746102e33660046110e5565b61062e565b6102746102f636600461114b565b61066b565b60075460ff166101dc565b61021d610314366004611190565b6001600160a01b031660009081526002602052604090205490565b61027461033d3660046110e5565b610678565b61027461068d565b61035d6103583660046111ab565b6106c8565b6040516001600160a01b0390911681526020016101e8565b6101dc610383366004611164565b6106e7565b6101f9610710565b61021d600081565b6101dc6103a63660046110e5565b61071f565b6101dc6103b93660046110e5565b610760565b61021d6103cc36600461114b565b61076e565b61021d7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a681565b610274610406366004611164565b610785565b61021d6104193660046111cd565b6001600160a01b03918216600090815260036020908152604080832093909416825291909152205490565b61021d7f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a81565b60006001600160e01b03198216635a05180f60e01b1480610490575061049082610844565b92915050565b6060600580546104a5906111f7565b80601f01602080910402602001604051908101604052809291908181526020018280546104d1906111f7565b801561051e5780601f106104f35761010080835404028352916020019161051e565b820191906000526020600020905b81548152906001019060200180831161050157829003601f168201915b5050505050905090565b600033610536818585610879565b5060019392505050565b60003361054e858285610900565b61055985858561094f565b506001949350505050565b6000828152602081905260409020600101546105808133610a36565b61058a8383610a87565b505050565b6001600160a01b03811633146105a457600080fd5b6105ae8282610aa9565b5050565b3360008181526003602090815260408083206001600160a01b038716845290915281205490919061053690829086906105ec908790611248565b610879565b61061b7f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a336106e7565b61062457600080fd5b61062c610acb565b565b6106587f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6336106e7565b61066157600080fd5b6105ae8282610b24565b6106753382610bcc565b50565b610683823383610900565b6105ae8282610bcc565b6106b77f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a336106e7565b6106c057600080fd5b61062c610c8b565b60008281526001602052604081206106e09083610cd0565b9392505050565b6000918252602082815260408084206001600160a01b0393909316845291905290205460ff1690565b6060600680546104a5906111f7565b3360008181526003602090815260408083206001600160a01b03871684529091528120549091908381101561075357600080fd5b6105598286868403610879565b60003361053681858561094f565b600081815260016020526040812061049090610cdc565b6000828152602081905260409020600101546107a18133610a36565b61058a8383610aa9565b6107b582826106e7565b6105ae576000828152602081815260408083206001600160a01b03851684529091529020805460ff191660011790556107eb3390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b60006106e0836001600160a01b038416610ce6565b60006001600160e01b03198216637965db0b60e01b148061049057506301ffc9a760e01b6001600160e01b0319831614610490565b6001600160a01b03831661088c57600080fd5b6001600160a01b03821661089f57600080fd5b6001600160a01b0383811660008181526003602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6001600160a01b038381166000908152600360209081526040808320938616835292905220546000198114610949578181101561093c57600080fd5b6109498484848403610879565b50505050565b6001600160a01b03831661096257600080fd5b6001600160a01b03821661097557600080fd5b610980838383610d35565b6001600160a01b038316600090815260026020526040902054818110156109a657600080fd5b6001600160a01b038085166000908152600260205260408082208585039055918516815290812080548492906109dd908490611248565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610a2991815260200190565b60405180910390a3610949565b610a4082826106e7565b6105ae57610a58816001600160a01b03166014610d40565b610a63836020610d40565b604051602001610a74929190611260565b60408051601f1981840301905252600080fd5b610a9182826107ab565b600082815260016020526040902061058a908261082f565b610ab38282610e99565b600082815260016020526040902061058a9082610efe565b60075460ff16610ada57600080fd5b6007805460ff191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b6040516001600160a01b03909116815260200160405180910390a1565b6001600160a01b038216610b3757600080fd5b610b4360008383610d35565b8060046000828254610b559190611248565b90915550506001600160a01b03821660009081526002602052604081208054839290610b82908490611248565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b6001600160a01b038216610bdf57600080fd5b610beb82600083610d35565b6001600160a01b03821660009081526002602052604090205481811015610c1157600080fd5b6001600160a01b0383166000908152600260205260408120838303905560048054849290610c409084906112d5565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a3505050565b60075460ff1615610c9b57600080fd5b6007805460ff191660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258610b073390565b60006106e08383610f13565b6000610490825490565b6000818152600183016020526040812054610d2d57508154600181810184556000848152602080822090930184905584548482528286019093526040902091909155610490565b506000610490565b61058a838383610f3d565b60606000610d4f8360026112ec565b610d5a906002611248565b67ffffffffffffffff811115610d7257610d7261130b565b6040519080825280601f01601f191660200182016040528015610d9c576020820181803683370190505b509050600360fc1b81600081518110610db757610db7611321565b60200101906001600160f81b031916908160001a905350600f60fb1b81600181518110610de657610de6611321565b60200101906001600160f81b031916908160001a9053506000610e0a8460026112ec565b610e15906001611248565b90505b6001811115610e8d576f181899199a1a9b1b9c1cb0b131b232b360811b85600f1660108110610e4957610e49611321565b1a60f81b828281518110610e5f57610e5f611321565b60200101906001600160f81b031916908160001a90535060049490941c93610e8681611337565b9050610e18565b5083156106e057600080fd5b610ea382826106e7565b156105ae576000828152602081815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b60006106e0836001600160a01b038416610f4d565b6000826000018281548110610f2a57610f2a611321565b9060005260206000200154905092915050565b60075460ff161561058a57600080fd5b60008181526001830160205260408120548015611036576000610f716001836112d5565b8554909150600090610f85906001906112d5565b9050818114610fea576000866000018281548110610fa557610fa5611321565b9060005260206000200154905080876000018481548110610fc857610fc8611321565b6000918252602080832090910192909255918252600188019052604090208390555b8554869080610ffb57610ffb61134e565b600190038181906000526020600020016000905590558560010160008681526020019081526020016000206000905560019350505050610490565b6000915050610490565b60006020828403121561105257600080fd5b81356001600160e01b0319811681146106e057600080fd5b60005b8381101561108557818101518382015260200161106d565b838111156109495750506000910152565b60208152600082518060208401526110b581604085016020870161106a565b601f01601f19169190910160400192915050565b80356001600160a01b03811681146110e057600080fd5b919050565b600080604083850312156110f857600080fd5b611101836110c9565b946020939093013593505050565b60008060006060848603121561112457600080fd5b61112d846110c9565b925061113b602085016110c9565b9150604084013590509250925092565b60006020828403121561115d57600080fd5b5035919050565b6000806040838503121561117757600080fd5b82359150611187602084016110c9565b90509250929050565b6000602082840312156111a257600080fd5b6106e0826110c9565b600080604083850312156111be57600080fd5b50508035926020909101359150565b600080604083850312156111e057600080fd5b6111e9836110c9565b9150611187602084016110c9565b600181811c9082168061120b57607f821691505b6020821081141561122c57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b6000821982111561125b5761125b611232565b500190565b7f416363657373436f6e74726f6c3a206163636f756e742000000000000000000081526000835161129881601785016020880161106a565b7001034b99036b4b9b9b4b733903937b6329607d1b60179184019182015283516112c981602884016020880161106a565b01602801949350505050565b6000828210156112e7576112e7611232565b500390565b600081600019048311821515161561130657611306611232565b500290565b634e487b7160e01b600052604160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b60008161134657611346611232565b506000190190565b634e487b7160e01b600052603160045260246000fdfea2646970667358221220dc76d52a3fe2e05530e10c74375609e7523a0097cdaa5550b189221ce317462d64736f6c634300080c0033";

type DummyWrappedBTCConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DummyWrappedBTCConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DummyWrappedBTC__factory extends ContractFactory {
  constructor(...args: DummyWrappedBTCConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "DummyWrappedBTC";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<DummyWrappedBTC> {
    return super.deploy(overrides || {}) as Promise<DummyWrappedBTC>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): DummyWrappedBTC {
    return super.attach(address) as DummyWrappedBTC;
  }
  connect(signer: Signer): DummyWrappedBTC__factory {
    return super.connect(signer) as DummyWrappedBTC__factory;
  }
  static readonly contractName: "DummyWrappedBTC";
  public readonly contractName: "DummyWrappedBTC";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DummyWrappedBTCInterface {
    return new utils.Interface(_abi) as DummyWrappedBTCInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DummyWrappedBTC {
    return new Contract(address, _abi, signerOrProvider) as DummyWrappedBTC;
  }
}