// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.18;

import {StagedProposalProcessor as SPP} from "./StagedProposalProcessor.sol";

/// @title MyPluginSetup
/// @author Aragon X - 2024
/// @notice The setup contract of the `StagedProposalProcessor` plugin.
/// @dev Release 1, Build 1
contract Blaxblux  {

    
    function setUp() public {
        address s = address(new SPP());
    }

}
