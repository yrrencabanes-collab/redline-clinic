import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Users, 
  UserSquare2, 
  Building2, 
  BedDouble, 
  ClipboardList, 
  Package, 
  Receipt, 
  Plus, 
  X, 
  ChevronDown 
} from 'lucide-react';

export default function App() {
  // Navigation active state management
  const currentNav = 'Doctor Orders';
  
  // Form State Management
  const [patient, setPatient] = useState('');
  const [prescriber, setPrescriber] = useState('');
  const [orderType, setOrderType] = useState('Medicine Prescription');
  const [medicines, setMedicines] = useState([
    { id: Date.now(), medicine: '', qty: 1, instructions: '' }
  ]);
  const [notes, setNotes] = useState('');

  // Dynamic Medicines List Logic
  const addMedicineRow = () => {
    setMedicines([
      ...medicines,
      { id: Date.now(), medicine: '', qty: 1, instructions: '' }
    ]);
  };

  const removeMedicineRow = (id) => {
    if (medicines.length > 1) {
      setMedicines(medicines.filter(med => med.id !== id));
    }
  };

  const handleMedicineChange = (id, field, value) => {
    setMedicines(medicines.map(med => 
      med.id === id ? { ...med, [field]: value } : med
    ));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Creating Order payload:', { patient, prescriber, orderType, medicines, notes });
    alert('Order created locally! Check your console for the structured payload.');
  };

  // Nav Items Layout data
  const navItems = [
    { name: 'Dashboard', icon: LayoutDashboard },
    { name: 'Patients', icon: Users },
    { name: 'Doctors & Nurses', icon: UserSquare2 },
    { name: 'Facilities', icon: Building2 },
    { name: 'Admitted Patients', icon: BedDouble },
    { name: 'Doctor Orders', icon: ClipboardList },
    { name: 'Inventory', icon: Package },
    { name: 'Billing', icon: Receipt },
  ];

  return (
    <div className="flex min-h-screen bg-[#F8FAFC] text-slate-800 font-sans antialiased">
      
      {/* --- SIDEBAR --- */}
      <aside className="w-64 bg-white border-r border-slate-100 flex flex-col justify-between shrink-0">
        <div>
          {/* Brand/Clinic Header */}
          <div className="p-5 border-b border-slate-50 flex items-center gap-3">
            <div className="bg-[#C50E29] text-white p-2 rounded-lg font-bold text-xl flex items-center justify-center h-9 w-9">
              +
            </div>
            <div>
              <h1 className="font-bold text-sm text-slate-900 leading-tight">RedLine Clinic</h1>
              <span className="text-xs text-slate-400 font-medium">CLINIC ERP</span>
            </div>
          </div>

          {/* Navigation Items */}
          <nav className="p-4 space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = item.name === currentNav;
              return (
                <button
                  key={item.name}
                  type="button"
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    isActive 
                      ? 'bg-[#FFF0F2] text-[#C50E29]' 
                      : 'text-slate-500 hover:bg-slate-50 hover:text-slate-800'
                  }`}
                >
                  <Icon size={18} className={isActive ? 'text-[#C50E29]' : 'text-slate-400'} />
                  {item.name}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Sidebar Footer */}
        <div className="p-5 text-xs text-slate-400 border-t border-slate-50">
          <p>Clinic ERP v1.0</p>
          <p>© 2026 RedLine</p>
        </div>
      </aside>

      {/* --- MAIN PAGE LAYOUT --- */}
      <div className="flex-1 flex flex-col min-w-0">
        
        {/* Top Navbar */}
        <header className="bg-white border-b border-slate-100 h-16 flex items-center justify-between px-8 shrink-0">
          <div className="flex items-center gap-1">
            <span className="text-[#C50E29] font-bold text-lg">EnterpriseCore</span>
            <span className="text-slate-800 font-semibold text-lg">Clinic</span>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="text-right">
              <p className="text-sm font-semibold text-slate-800">Alex Thompson</p>
              <p className="text-xs text-slate-400">Administrator</p>
            </div>
            <div className="w-9 h-9 rounded-full bg-[#C50E29] text-white flex items-center justify-center font-bold text-sm tracking-wider">
              AT
            </div>
            <ChevronDown size={16} className="text-slate-400 cursor-pointer" />
          </div>
        </header>

        {/* Inner Main Content */}
        <main className="flex-1 p-8 max-w-5xl w-full mx-auto overflow-y-auto">
          
          {/* Breadcrumbs */}
          <nav className="text-xs text-slate-400 font-medium mb-2 flex gap-1.5">
            <span>Home</span> &gt; <span>Doctor Orders</span> &gt; <span className="text-slate-600">New</span>
          </nav>

          <h2 className="text-2xl font-bold text-slate-900 mb-6">New Doctor Order</h2>

          {/* Form Initialization */}
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Box 1: Core Selection Parameters */}
            <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Patient Select */}
                <div>
                  <label className="block text-xs font-bold text-slate-600 tracking-wide uppercase mb-2">
                    Patient <span className="text-red-500">*</span>
                  </label>
                  <select 
                    required
                    value={patient}
                    onChange={(e) => setPatient(e.target.value)}
                    className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-slate-400 text-slate-700 appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-[length:16px] bg-[right_12px_center] bg-no-repeat"
                  >
                    <option value="" disabled hidden>Select patient...</option>
                    <option value="patient-abc">John Doe</option>
                    <option value="patient-xyz">Jane Smith</option>
                  </select>
                </div>

                {/* Prescriber Select */}
                <div>
                  <label className="block text-xs font-bold text-slate-600 tracking-wide uppercase mb-2">
                    Prescriber (Doctor / Nurse) <span className="text-red-500">*</span>
                  </label>
                  <select 
                    required
                    value={prescriber}
                    onChange={(e) => setPrescriber(e.target.value)}
                    className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-slate-400 text-slate-700 appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-[length:16px] bg-[right_12px_center] bg-no-repeat"
                  >
                    <option value="" disabled hidden>Select prescriber...</option>
                    <option value="dr-thompson">Alex Thompson</option>
                  </select>
                </div>
              </div>

              {/* Order Type Select */}
              <div className="w-full md:w-1/2 pr-3">
                <label className="block text-xs font-bold text-slate-600 tracking-wide uppercase mb-2">
                  Order Type <span className="text-red-500">*</span>
                </label>
                <select 
                  value={orderType}
                  onChange={(e) => setOrderType(e.target.value)}
                  className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-slate-400 text-slate-700 appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-[length:16px] bg-[right_12px_center] bg-no-repeat"
                >
                  <option value="Medicine Prescription">Medicine Prescription</option>
                  <option value="Diagnostic Lab Work">Diagnostic Lab Work</option>
                </select>
              </div>
            </div>

            {/* Box 2: Prescribed Medicines Repeatable Grid */}
            <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-sm font-bold text-slate-800">
                    Prescribed Medicines <span className="text-red-500">*</span>
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">Add one or more medicines to this prescription.</p>
                </div>
                <button
                  type="button"
                  onClick={addMedicineRow}
                  className="inline-flex items-center gap-1 border border-slate-200 hover:bg-slate-50 text-slate-700 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors shadow-sm"
                >
                  <Plus size={14} />
                  Add Medicine
                </button>
              </div>

              {/* Repeatable Layout Node */}
              <div className="space-y-3 pt-2">
                {medicines.map((med, index) => (
                  <div key={med.id} className="flex gap-4 items-center">
                    
                    {/* Medicine Picker */}
                    <div className="flex-[3]">
                      {index === 0 && <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Medicine</label>}
                      <select
                        value={med.medicine}
                        onChange={(e) => handleMedicineChange(med.id, 'medicine', e.target.value)}
                        className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-slate-400 text-slate-700 appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-[length:16px] bg-[right_12px_center] bg-no-repeat"
                      >
                        <option value="">Select medicine...</option>
                        <option value="amoxicillin">Amoxicillin 500mg</option>
                        <option value="paracetamol">Paracetamol 500mg</option>
                      </select>
                    </div>

                    {/* Qty Input */}
                    <div className="flex-[1]">
                      {index === 0 && <label className="block text-xs font-bold text-slate-500 uppercase mb-2">QTY</label>}
                      <input
                        type="number"
                        min="1"
                        value={med.qty}
                        onChange={(e) => handleMedicineChange(med.id, 'qty', parseInt(e.target.value) || 1)}
                        className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-slate-400 text-slate-700"
                      />
                    </div>

                    {/* Instructions Input */}
                    <div className="flex-[4]">
                      {index === 0 && <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Instructions</label>}
                      <input
                        type="text"
                        value={med.instructions}
                        onChange={(e) => handleMedicineChange(med.id, 'instructions', e.target.value)}
                        className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-slate-400 text-slate-700"
                        placeholder="e.g. 1 tablet twice daily"
                      />
                    </div>

                    {/* Row Clean Trigger */}
                    <div className={index === 0 ? 'pt-6' : ''}>
                      <button
                        type="button"
                        disabled={medicines.length === 1}
                        onClick={() => removeMedicineRow(med.id)}
                        className={`p-2 rounded-lg border transition-all ${
                          medicines.length === 1 
                            ? 'border-slate-100 text-slate-200 cursor-not-allowed' 
                            : 'border-slate-100 text-slate-400 hover:text-red-500 hover:bg-red-50'
                        }`}
                      >
                        <X size={16} />
                      </button>
                    </div>

                  </div>
                ))}
              </div>
            </div>

            {/* Box 3: Form Multi-line Notes */}
            <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
              <label className="block text-xs font-bold text-slate-500 tracking-wide uppercase mb-2">
                Notes / Instructions
              </label>
              <textarea
                rows={4}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full bg-white border border-slate-200 rounded-lg p-3 text-sm focus:outline-none focus:border-slate-400 text-slate-700 resize-y"
              />
            </div>

            {/* Sticky Submission Area */}
            <div className="flex justify-end pt-2">
              <button
                type="submit"
                className="bg-[#C50E29] hover:bg-[#A30B21] text-white text-sm font-semibold px-6 py-2.5 rounded-lg transition-colors shadow-sm"
              >
                Create Order
              </button>
            </div>

          </form>
        </main>
      </div>
    </div>
  );
}
