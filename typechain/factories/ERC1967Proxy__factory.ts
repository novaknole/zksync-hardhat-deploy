/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BytesLike,
  Contract,
  ContractFactory,
  PayableOverrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ERC1967Proxy, ERC1967ProxyInterface } from "../ERC1967Proxy";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_logic",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    stateMutability: "payable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "previousAdmin",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "AdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "beacon",
        type: "address",
      },
    ],
    name: "BeaconUpgraded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "Upgraded",
    type: "event",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x00020000000000020007000000000002000000000301001900000060033002700000008b0330019700010000003103550000008008000039000000400080043f00000001022001900000002e0000c13d000000000431034f0000009402000041000000000202041a0000008f02200197000000000503004b000000370000c13d0000000001000414000000040320008c000000ba0000c13d00000000030000310000001f0230018f00000005013002720000001f0000613d00000000050000190000000506500210000000000764034f000000000707043b00000000007604350000000105500039000000000615004b000000180000413d000000000502004b000001080000613d00000003022002100000000501100210000000000501043300000000052501cf000000000525022f000000000414034f000000000404043b0000010002200089000000000424022f00000000022401cf000000000252019f0000000000210435000001080000013d0000008c023000410000008d0220009c0000006e0000213d000000a20100004100000000001004350000004101000039000000040010043f000000a30100004100000227000104300000001f0630018f0000000505300272000000420000613d00000000070000190000000508700210000000000981034f000000000909043b00000000009804350000000107700039000000000857004b0000003b0000413d000000000706004b000000500000613d00000003066002100000000505500210000000000705043300000000076701cf000000000767022f000000000151034f000000000101043b0000010006600089000000000161022f00000000016101cf000000000171019f00000000001504350000000001000414000000040520008c000000e10000c13d00000000030000310000001f0230018f00000005013002720000005f0000613d00000000050000190000000506500210000000000764034f000000000707043b00000000007604350000000105500039000000000615004b000000580000413d000000000502004b000001080000613d00000003022002100000000501100210000000000501043300000000052501cf000000000525022f000000000414034f000000000404043b0000010002200089000000000424022f00000000022401cf000000000252019f0000000000210435000001080000013d0000009f023000390000008e02200197000000400020043f0000001f0230018f00000005043002720000007d0000613d00000000050000190000000506500210000000000761034f000000000707043b000000800660003900000000007604350000000105500039000000000645004b000000750000413d000000000502004b0000008c0000613d0000000504400210000000000141034f00000003022002100000008004400039000000000504043300000000052501cf000000000525022f000000000101043b0000010002200089000000000121022f00000000012101cf000000000151019f00000000001404350000003f0130008c000000b80000a13d000000800700043d0000008f0a7001970000008f0170009c000000b80000213d000000a00200043d000000900120009c000000b80000213d0000001f012000390000009104000041000000000531004b000000000500001900000000050480190000009101100197000000000601004b0000000004008019000000910110009c000000000405c019000000000104004b000000b80000c13d00000080012000390000000001010433000000900410009c000000310000213d0000003f04100039000000200900008a000000000494016f000000400b00043d00000000044b00190000000005b4004b00000000050000190000000105004039000000900640009c000000310000213d0000000105500190000000310000c13d0000008003300039000000400040043f00000000061b0436000000a0022000390000000004210019000000000334004b0000010f0000a13d000000000100001900000227000104300000008b030000410000008b0410009c0000000001038019000000c001100210022502200000040f0001000000010355000000000301001900000060033002700000001f0430018f0000008b0030019d0000008b033001970000000505300272000000cf0000613d00000000060000190000000507600210000000000871034f000000000808043b00000000008704350000000106600039000000000756004b000000c80000413d000000000604004b000000dd0000613d00000003044002100000000505500210000000000605043300000000064601cf000000000646022f000000000151034f000000000101043b0000010004400089000000000141022f00000000014101cf000000000161019f00000000001504350000000101200190000001080000c13d000000600130021000000227000104300000008b040000410000008b0510009c0000000001048019000000c0011002100000006003300210000000000131019f022502200000040f0001000000010355000000000301001900000060033002700000001f0430018f0000008b0030019d0000008b033001970000000505300272000000f80000613d00000000060000190000000507600210000000000871034f000000000808043b00000000008704350000000106600039000000000756004b000000f10000413d000000000604004b000001060000613d00000003044002100000000505500210000000000605043300000000064601cf000000000646022f000000000151034f000000000101043b0000010004400089000000000141022f00000000014101cf000000000161019f000000000015043500000001012001900000010d0000613d0000008b010000410000008b0230009c00000000030180190000006001300210000002260001042e0000006001300210000002270001043000050000000b001d00060000000a001d000300000009001d000200000008001d000000000301004b0000011d0000613d000000000300001900000000046300190000000005230019000000000505043300000000005404350000002003300039000000000413004b000001160000413d000400000006001d0000000001160019000000000001043500000092010000410000000000100439000700000007001d00000004007004430000008b0100004100000000020004140000008b0320009c0000000002018019000000c00120021000000093011001c700008002020000390225021b0000040f0000000102200190000001fd0000613d000000000101043b000000000101004b000001460000c13d000000400100043d00000064021000390000009f0300004100000000003204350000004402100039000000a003000041000000000032043500000024021000390000002d0300003900000000003204350000009c0200004100000000002104350000000402100039000000200300003900000000003204350000008b020000410000008b0310009c00000000010280190000004001100210000000a1011001c700000227000104300000009401000041000000000201041a00000095022001970000000605000029000000000252019f000000000021041b0000008b0100004100000000020004140000008b0320009c0000000002018019000000c00120021000000096011001c70000800d0200003900000002030000390000009704000041022502160000040f0000000101200190000000070200002900000005050000290000000407000029000000b80000613d0000000001050433000000000101004b000001630000c13d0000002001000039000001000010044300000120000004430000009e01000041000002260001042e000000400400043d000000980140009c000000310000213d0000006001400039000000400010043f0000004001400039000000990300004100000000003104350000002701000039000600000004001d00000000031404360000009a01000041000100000003001d000000000013043500000000060504330000000001000414000000040320008c000001780000c13d000000010200003900000000030000310000018a0000013d0000008b030000410000008b0470009c000000000703801900000040047002100000008b0560009c00000000060380190000006005600210000000000545019f0000008b0410009c0000000001038019000000c001100210000000000115019f022502200000040f000000010220018f000100000001035500000060011002700000008b0010019d0000008b031001970000006001000039000000000403004b000001aa0000c13d0000000001010433000000000202004b000001d80000c13d000000000201004b000001fe0000c13d000000400400043d000700000004001d0000009c01000041000000000014043500000004014000390000002002000039000000000021043500000006010000290000000003010433000600000003001d0000002401400039000000000031043500000044024000390000000101000029022502080000040f00000006010000290000001f01100039000000030110017f00000044011000390000008b020000410000008b0310009c00000000010280190000000704000029000002020000013d000000900130009c0000000304000029000000310000213d0000003f01300039000000000441016f000000400100043d0000000004410019000000000514004b00000000050000190000000105004039000000900640009c000000310000213d0000000105500190000000310000c13d000000400040043f0000001f0430018f000000000931043600000001050003670000000503300272000001c70000613d000000000600001900000005076002100000000008790019000000000775034f000000000707043b00000000007804350000000106600039000000000736004b000001bf0000413d000200000009001d000000000604004b0000018d0000613d0000000503300210000000000535034f00000002033000290000000304400210000000000603043300000000064601cf000000000646022f000000000505043b0000010004400089000000000545022f00000000044501cf000000000464019f00000000004304350000018d0000013d000000000101004b00000007020000290000015e0000c13d0000009201000041000000000010043900000004002004430000008b0100004100000000020004140000008b0320009c0000000002018019000000c00120021000000093011001c700008002020000390225021b0000040f0000000102200190000001fd0000613d000000000101043b000000000101004b0000015e0000c13d000000400100043d00000044021000390000009b03000041000000000032043500000024021000390000001d0300003900000000003204350000009c0200004100000000002104350000000402100039000000200300003900000000003204350000008b020000410000008b0310009c000000000102801900000040011002100000009d011001c70000022700010430000000000001042f0000008b020000410000008b0310009c000000000102801900000002040000290000008b0340009c000000000402801900000040024002100000006001100210000000000121019f0000022700010430000000000403004b000002120000613d000000000400001900000000052400190000000006140019000000000606043300000000006504350000002004400039000000000534004b0000020b0000413d00000000012300190000000000010435000000000001042d000000000001042f00000219002104210000000102000039000000000001042d0000000002000019000000000001042d0000021e002104230000000102000039000000000001042d0000000002000019000000000001042d00000223002104250000000102000039000000000001042d0000000002000019000000000001042d0000022500000432000002260001042e0000022700010430000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000ffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000000000009fffffffffffffffffffffffffffffffffffffffffffffffff000000000000007f00000000000000000000000000000000000000000000000000000001ffffffe0000000000000000000000000ffffffffffffffffffffffffffffffffffffffff000000000000000000000000000000000000000000000000ffffffffffffffff80000000000000000000000000000000000000000000000000000000000000001806aa1896bbf26568e884a7374b41e002500962caba6a15023a8d90e8508b830200000200000000000000000000000000000024000000000000000000000000360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbcffffffffffffffffffffffff00000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000bc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b000000000000000000000000000000000000000000000000ffffffffffffff9f206661696c656400000000000000000000000000000000000000000000000000416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000008c379a000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000006400000000000000000000000000000002000000000000000000000000000000400000010000000000000000006f74206120636f6e747261637400000000000000000000000000000000000000455243313936373a206e657720696d706c656d656e746174696f6e206973206e00000000000000000000000000000000000000840000000000000000000000004e487b710000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000240000000000000000000000003ba765fa10e1e74bf55235fe6b351c42639f2f5db641ab558a46f5e362df2958";

export class ERC1967Proxy__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    _logic: string,
    _data: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ERC1967Proxy> {
    return super.deploy(
      _logic,
      _data,
      overrides || {}
    ) as Promise<ERC1967Proxy>;
  }
  getDeployTransaction(
    _logic: string,
    _data: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_logic, _data, overrides || {});
  }
  attach(address: string): ERC1967Proxy {
    return super.attach(address) as ERC1967Proxy;
  }
  connect(signer: Signer): ERC1967Proxy__factory {
    return super.connect(signer) as ERC1967Proxy__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC1967ProxyInterface {
    return new utils.Interface(_abi) as ERC1967ProxyInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC1967Proxy {
    return new Contract(address, _abi, signerOrProvider) as ERC1967Proxy;
  }
}
