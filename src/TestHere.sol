// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.18;

import {Blaxblux} from "./Blaxblux.sol";
import {Test} from "forge-std/Test.sol";

/// @title MyPluginSetup
/// @author Aragon X - 2024
/// @notice The setup contract of the `StagedProposalProcessor` plugin.
/// @dev Release 1, Build 1
contract TestHere is Test {

    constructor() {
        Blaxblux s = new Blaxblux();
        vm.roll(block.number + 5);
        Blaxblux s2 = new Blaxblux();
    }
    
}
