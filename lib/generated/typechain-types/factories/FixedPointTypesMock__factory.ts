/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  FixedPointTypesMock,
  FixedPointTypesMockInterface,
} from "../FixedPointTypesMock";

const _abi = [
  {
    inputs: [
      {
        internalType: "UFixed256x18",
        name: "a",
        type: "uint256",
      },
      {
        internalType: "UFixed256x18",
        name: "b",
        type: "uint256",
      },
    ],
    name: "add",
    outputs: [
      {
        internalType: "UFixed256x18",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "UFixed256x18",
        name: "a",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "b",
        type: "uint256",
      },
    ],
    name: "div0",
    outputs: [
      {
        internalType: "UFixed256x18",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "UFixed256x18",
        name: "a",
        type: "uint256",
      },
      {
        internalType: "UFixed256x18",
        name: "b",
        type: "uint256",
      },
    ],
    name: "divToUint256",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "UFixed256x18",
        name: "a",
        type: "uint256",
      },
      {
        internalType: "UFixed256x18",
        name: "b",
        type: "uint256",
      },
    ],
    name: "eq",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "UFixed256x18",
        name: "value",
        type: "uint256",
      },
    ],
    name: "floorToUint256",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "UFixed256x18",
        name: "a",
        type: "uint256",
      },
      {
        internalType: "UFixed256x18",
        name: "b",
        type: "uint256",
      },
    ],
    name: "gte",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "UFixed256x18",
        name: "a",
        type: "uint256",
      },
      {
        internalType: "UFixed256x18",
        name: "b",
        type: "uint256",
      },
    ],
    name: "lte",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "UFixed256x18",
        name: "a",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "b",
        type: "uint256",
      },
    ],
    name: "mul0",
    outputs: [
      {
        internalType: "UFixed256x18",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "UFixed256x18",
        name: "a",
        type: "uint256",
      },
      {
        internalType: "UFixed256x18",
        name: "b",
        type: "uint256",
      },
    ],
    name: "sub",
    outputs: [
      {
        internalType: "UFixed256x18",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "UFixed256x18",
        name: "value",
        type: "uint256",
      },
    ],
    name: "toUFixed16x4",
    outputs: [
      {
        internalType: "UFixed16x4",
        name: "converted",
        type: "uint16",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "UFixed16x4",
        name: "value",
        type: "uint16",
      },
    ],
    name: "toUFixed256x18__fromUFixed16x4",
    outputs: [
      {
        internalType: "UFixed256x18",
        name: "converted",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "UFixed32x6",
        name: "value",
        type: "uint32",
      },
    ],
    name: "toUFixed256x18__fromUFixed32x6",
    outputs: [
      {
        internalType: "UFixed256x18",
        name: "converted",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "toUFixed256x18__fromUint256",
    outputs: [
      {
        internalType: "UFixed256x18",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "UFixed256x18",
        name: "value",
        type: "uint256",
      },
    ],
    name: "toUFixed32x6",
    outputs: [
      {
        internalType: "UFixed32x6",
        name: "converted",
        type: "uint32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061050e806100206000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c8063ae38ebb81161008c578063b67d77c511610066578063b67d77c5146101e5578063bbaaee20146101f8578063ea6515c41461020b578063ff4b83cf1461021e57600080fd5b8063ae38ebb814610115578063b42b037d146101ac578063b4773329146101d257600080fd5b806332148d73116100c857806332148d731461013b5780633b40436b1461015e578063771602f714610186578063a53e4dbd1461019957600080fd5b80630a0cfc2a146100ef578063223bda65146101155780632cf8553314610128575b600080fd5b6101026100fd3660046103cd565b610231565b6040519081526020015b60405180910390f35b6101026101233660046103e6565b610242565b6101026101363660046103cd565b610255565b61014e6101493660046103e6565b610260565b604051901515815260200161010c565b61017161016c3660046103cd565b61026a565b60405163ffffffff909116815260200161010c565b6101026101943660046103e6565b610275565b6101026101a73660046103e6565b610281565b6101bf6101ba3660046103cd565b61028d565b60405161ffff909116815260200161010c565b61014e6101e03660046103e6565b610298565b6101026101f33660046103e6565b6102a3565b610102610206366004610408565b6102af565b61014e6102193660046103e6565b6102c4565b61010261022c36600461042e565b6102cf565b600061023c826102e3565b92915050565b600061024e83836102f7565b9392505050565b600061023c82610303565b600081831461024e565b600061023c82610317565b600061024e8383610351565b600061024e838361035d565b600061023c82610369565b60008282111561024e565b600061024e8383610399565b600064e8d4a5100063ffffffff83160261023c565b60008282101561024e565b6000655af3107a400061ffff83160261023c565b600061023c82670de0b6b3a7640000610468565b600061024e8284610487565b600061023c670de0b6b3a764000083610487565b600061033061032b64e8d4a5100084610487565b6103a5565b905063ffffffff811664e8d4a510000282145b61034c57600080fd5b919050565b600061024e82846104a9565b600061024e8284610468565b600061038361037e655af3107a400084610487565b6103bc565b905061ffff8116655af3107a4000028214610343565b600061024e82846104c1565b600063ffffffff8211156103b857600080fd5b5090565b600061ffff8211156103b857600080fd5b6000602082840312156103df57600080fd5b5035919050565b600080604083850312156103f957600080fd5b50508035926020909101359150565b60006020828403121561041a57600080fd5b813563ffffffff8116811461024e57600080fd5b60006020828403121561044057600080fd5b813561ffff8116811461024e57600080fd5b634e487b7160e01b600052601160045260246000fd5b600081600019048311821515161561048257610482610452565b500290565b6000826104a457634e487b7160e01b600052601260045260246000fd5b500490565b600082198211156104bc576104bc610452565b500190565b6000828210156104d3576104d3610452565b50039056fea2646970667358221220e710192ee0df15c7b98908f045d16a608db5e4e4c18d1c79378d5f2a21d5983664736f6c634300080c0033";

type FixedPointTypesMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: FixedPointTypesMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class FixedPointTypesMock__factory extends ContractFactory {
  constructor(...args: FixedPointTypesMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "FixedPointTypesMock";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<FixedPointTypesMock> {
    return super.deploy(overrides || {}) as Promise<FixedPointTypesMock>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): FixedPointTypesMock {
    return super.attach(address) as FixedPointTypesMock;
  }
  connect(signer: Signer): FixedPointTypesMock__factory {
    return super.connect(signer) as FixedPointTypesMock__factory;
  }
  static readonly contractName: "FixedPointTypesMock";
  public readonly contractName: "FixedPointTypesMock";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FixedPointTypesMockInterface {
    return new utils.Interface(_abi) as FixedPointTypesMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FixedPointTypesMock {
    return new Contract(address, _abi, signerOrProvider) as FixedPointTypesMock;
  }
}
