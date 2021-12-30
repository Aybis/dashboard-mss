import { useSelector } from 'react-redux';

export default function Table() {
  const DASHBOARD = useSelector((state) => state.dashboard);

  return (
    <div className="flex flex-col mt-4">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    No.
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Channel
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Deskripsi Project
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    End Customer
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Nilai Project
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {DASHBOARD.dataDetail.length > 0 ? (
                  DASHBOARD.dataDetail.map((item, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-500">
                        {index + 1}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-500">
                        {item.channel}
                      </td>
                      <td className="px-6 py-4  text-sm text-gray-500">
                        {item.desc_project}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {item.end_customer}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-semibold">
                        Rp.{' '}
                        {new Intl.NumberFormat('id-ID').format(
                          item.nilai_project,
                        )}
                        ,-
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={6} rowSpan={6}>
                      Tidak Ada Data
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
