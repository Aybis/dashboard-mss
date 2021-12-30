import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {
  ChartBar,
  ChartDoughnut,
  ChartStackBar,
  FilterMonthAndYear,
  Status,
  TitlePageAndBreadcumbs,
} from '../components';
import Modal from '../components/Modal';
import Table from '../components/Table';
import Header from '../includes/Header';
import Sidebar from '../includes/Sidebar';
import {
  fetchDataByunit,
  fetchDataDetailByStatus,
  fetchDataSummary,
} from '../redux/actions/dashboard';

export default function Dashboard() {
  const DASHBOARD = useSelector((state) => state.dashboard);
  const dispatch = useDispatch();
  const [openModal, setopenModal] = useState(false);
  const [titleModal, settitleModal] = useState('');
  const [temporary, setTemporary] = useState({
    month: new Date().getMonth() + 1,
    year: new Date().getFullYear(),
  });

  const handlerOnChange = (event) => {
    event.preventDefault();

    if (event.target.name === 'month') {
      setTemporary({
        month: event.target.value,
        year: temporary.year,
      });
      dispatch(
        fetchDataSummary({
          month: event.target.value,
          year: temporary.year,
        }),
      );
      dispatch(
        fetchDataByunit({
          month: event.target.value,
          year: temporary.year,
        }),
      );
    }

    if (event.target.name === 'year') {
      setTemporary({
        month: temporary.month,
        year: event.target.value,
      });
      dispatch(
        fetchDataSummary({
          month: temporary.month,
          year: event.target.value,
        }),
      );
      dispatch(
        fetchDataByunit({ month: temporary.month, year: event.target.value }),
      );
    }
  };

  const handlerClickDetail = (item) => {
    setopenModal(true);
    settitleModal(item.name);
    dispatch(
      fetchDataDetailByStatus({
        id: item.status_id,
        month: temporary.month,
        year: temporary.year,
      }),
    );
  };

  useEffect(() => {
    dispatch(fetchDataSummary(temporary));
    dispatch(fetchDataByunit(temporary));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return (
    <div className="min-h-screen h-full w-full bg-zinc-50">
      {/* When the mobile menu is open, add `overflow-hidden` to the `body` element to prevent double scrollbars */}
      <Header />
      <div className="py-10 inset-0">
        <div className="mx-auto sm:px-6 lg:px-8 lg:grid lg:grid-cols-12 lg:gap-8">
          {/* Sidebar Section */}
          <Sidebar />
          {/* Content Section */}
          <main className="lg:col-span-9 xl:col-span-10">
            <TitlePageAndBreadcumbs title="Dashboard" />
            <FilterMonthAndYear
              month={temporary.month}
              year={temporary.year}
              handlerChange={handlerOnChange}
            />
            <div className="relative p-4">
              <Status handlerClickDetail={handlerClickDetail} />
            </div>

            <div className="relative my-8">
              <h1 className="font-semibold text-gray-800 text-xl">
                Rekapitulasi
              </h1>

              <div className="grid xl:grid-cols-3 gap-6 mt-4">
                {!DASHBOARD.isLoading ? (
                  DASHBOARD.dataByUnit.length > 0 ? (
                    <>
                      <div className="relative bg-white p-4 lg:col-span-1 col-span-2 rounded-md">
                        <ChartDoughnut />
                      </div>
                      <div className="relative bg-white p-4 col-span-2 rounded-md">
                        <ChartBar />
                      </div>
                      <div className="relative bg-white p-4 col-span-3 rounded-md hidden">
                        <ChartStackBar />
                      </div>
                    </>
                  ) : (
                    <p>Tidak ada data </p>
                  )
                ) : (
                  <p>Loading ....</p>
                )}
              </div>
            </div>
          </main>
        </div>
      </div>
      <Modal
        isOpen={openModal}
        handlerOpen={() => setopenModal(false)}
        title={titleModal}>
        <div className="relative mb-6">
          <h1 className="font-medium text-gray-700 mt-8">List {titleModal}</h1>
          <Table />
        </div>
      </Modal>
    </div>
  );
}
