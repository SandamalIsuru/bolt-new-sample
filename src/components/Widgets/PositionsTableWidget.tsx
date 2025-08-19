import React from 'react';

export const PositionsTableWidget: React.FC = () => {
  const positions = [
    {
      participant: 'SQL Test1',
      account: 'SQL Test1',
      externalAccountId: 'Galaxy_Account_1',
      entityName: 'Entity 12',
      cpCode: 'Galaxy_Account_1 Cp Code - 001',
      positionType: 'External',
      transactionType: 'Staking',
      transactionSubType: 'Balance Update',
      transferType: 'Reward'
    },
    {
      participant: 'SQL Test',
      account: 'SQL Test',
      externalAccountId: 'Galaxy_Account_1',
      entityName: 'Entity 12',
      cpCode: 'Galaxy_Account_1 Cp Code - 001',
      positionType: 'External',
      transactionType: 'Staking',
      transactionSubType: 'Reward',
      transferType: 'Reward'
    }
  ];

  return (
    <div className="bg-gray-800 text-white p-6 rounded-lg h-full">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Positions</h3>
        <span className="text-blue-400 text-sm cursor-pointer">Transfers ↑</span>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-600">
              <th className="text-left py-2">Participant</th>
              <th className="text-left py-2">Account</th>
              <th className="text-left py-2">External Account ID</th>
              <th className="text-left py-2">Entity Name</th>
              <th className="text-left py-2">CP Code</th>
              <th className="text-left py-2">Position Type</th>
              <th className="text-left py-2">Transaction Type</th>
              <th className="text-left py-2">Transaction Sub Type</th>
              <th className="text-left py-2">Transfer Type</th>
            </tr>
          </thead>
          <tbody>
            {positions.map((position, index) => (
              <tr key={index} className="border-b border-gray-700 hover:bg-gray-700">
                <td className="py-2">{position.participant}</td>
                <td className="py-2">{position.account}</td>
                <td className="py-2">{position.externalAccountId}</td>
                <td className="py-2">{position.entityName}</td>
                <td className="py-2">{position.cpCode}</td>
                <td className="py-2">{position.positionType}</td>
                <td className="py-2">{position.transactionType}</td>
                <td className="py-2">{position.transactionSubType}</td>
                <td className="py-2">{position.transferType}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};