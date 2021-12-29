import {
  DocumentDownloadIcon,
  DocumentIcon,
  DocumentRemoveIcon,
  DocumentTextIcon,
  TrendingDownIcon,
  TrendingUpIcon,
} from '@heroicons/react/solid';
import { useSelector } from 'react-redux';

const Status = ({ handlerClickDetail }) => {
  const DASHBOARD = useSelector((state) => state.dashboard);

  const sortWithKnownPrefix = (prefix, arr) => {
    // Get the non-prefix elements
    var rest = arr.filter(function (item) {
      return prefix.indexOf(item.status_id) === -1;
    });
    // Concatenate the prefix and the sorted non-prefix elements
    return prefix.concat(rest.sort());
  };

  sortWithKnownPrefix(['4', '3', '6', '1', '7', '5'], DASHBOARD.data);
  return (
    <>
      <h3 className="text-lg leading-6 font-semibold text-gray-900">
        Desember
      </h3>

      <div className="relative my-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4 gap-6">
          {DASHBOARD.data.length > 0 ? (
            DASHBOARD.data.map((item) => (
              <div
                key={Math.random()}
                className="relative flex flex-col justify-between gap-4 bg-white rounded-md">
                <div className="flex gap-4 p-4">
                  <span className="h-14 w-14 flex justify-center items-center bg-sky-500 rounded-md p-3">
                    {item.status_id === 1 && (
                      <DocumentRemoveIcon
                        className="h-10 w-10 text-white"
                        aria-hidden="true"
                      />
                    )}
                    {item.status_id === 3 && (
                      <DocumentDownloadIcon
                        className="h-10 w-10 text-white"
                        aria-hidden="true"
                      />
                    )}
                    {item.status_id === 4 && (
                      <DocumentIcon
                        className="h-10 w-10 text-white"
                        aria-hidden="true"
                      />
                    )}
                    {item.status_id === 5 && (
                      <TrendingDownIcon
                        className="h-10 w-10 text-white"
                        aria-hidden="true"
                      />
                    )}
                    {item.status_id === 6 && (
                      <DocumentTextIcon
                        className="h-10 w-10 text-white"
                        aria-hidden="true"
                      />
                    )}
                    {item.status_id === 7 && (
                      <TrendingUpIcon
                        className="h-10 w-10 text-white"
                        aria-hidden="true"
                      />
                    )}
                  </span>
                  <div className="relative flex w-full">
                    <div className="flex flex-col items-start">
                      <span className="text-base font-sm text-gray-400 text-opacity-80 truncate">
                        Project {item.name}
                      </span>
                      <p className="text-2xl font-semibold text-gray-900">
                        {/* Rp. {item.total.toLocaleString('id-ID')},- */}
                        Rp. {new Intl.NumberFormat('id-ID').format(item.total)}
                        ,-
                      </p>
                      <div className="flex items-end">
                        <span className="text-base font-medium text-gray-400 truncate mt-1">
                          {item.count} Dokumen
                        </span>
                        {/* <p
                          className={classNames(
                            item.changeType === 'increase'
                              ? 'text-green-600'
                              : 'text-red-600',
                            'ml-2 flex items-baseline text-sm font-semibold',
                          )}>
                          {item.changeType === 'increase' ? (
                            <ArrowSmUpIcon
                              className="self-center flex-shrink-0 h-5 w-5 text-green-500"
                              aria-hidden="true"
                            />
                          ) : (
                            <ArrowSmDownIcon
                              className="self-center flex-shrink-0 h-5 w-5 text-red-500"
                              aria-hidden="true"
                            />
                          )}

                          <span className="sr-only">
                            {item.changeType === 'increase'
                              ? 'Increased'
                              : 'Decreased'}{' '}
                            by
                          </span>
                          {item.change}
                        </p> */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative rounded-b-md inset-x-0 bg-sky-100 px-4 py-4 sm:px-6">
                  <div className="text-sm">
                    <button
                      onClick={() => handlerClickDetail(item)}
                      className="font-medium text-sky-600 hover:text-sky-500">
                      View detail
                      <span className="sr-only"> {item.name} stats</span>
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>Loading ....</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Status;
