import React from 'react';
import { Link } from 'react-router-dom';
import decorImage from '../assets/images/moroccan-interior-design.jpg';

const Shop = () => {
    return (
        <div>



            <div className="bg-white">
                <div>
                    <div className="relative z-40 lg:hidden" role="dialog" aria-modal="true">
                        <div className="fixed inset-0 bg-black bg-opacity-25"></div>

                        <div className="fixed inset-0 z-40 flex">
                            <div className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                                <div className="flex items-center justify-between px-4">
                                    <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                                    <button type="button" className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400">
                                        <span className="sr-only">Close menu</span>
                                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>

                                {/* <!-- Filters --> */}
                                <form className="mt-4 border-t border-gray-200">
                                    <h3 className="sr-only">Categories</h3>
                                    <ul role="list" className="px-2 py-3 font-medium text-gray-900">
                                        <li>
                                            <a href="#" className="block px-2 py-3">Totes</a>
                                        </li>

                                        <li>
                                            <a href="#" className="block px-2 py-3">Backpacks</a>
                                        </li>

                                        <li>
                                            <a href="#" className="block px-2 py-3">Travel Bags</a>
                                        </li>

                                        <li>
                                            <a href="#" className="block px-2 py-3">Hip Bags</a>
                                        </li>

                                        <li>
                                            <a href="#" className="block px-2 py-3">Laptop Sleeves</a>
                                        </li>
                                    </ul>

                                    <div className="border-t border-gray-200 px-4 py-6">
                                        <h3 className="-mx-2 -my-3 flow-root">
                                            {/* <!-- Expand/collapse section button --> */}
                                            <button type="button" className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500" aria-controls="filter-section-mobile-0" aria-expanded="false">
                                                <span className="font-medium text-gray-900">Color</span>
                                                <span className="ml-6 flex items-center">
                                                    {/* <!-- Expand icon, show/hide based on section open state. --> */}
                                                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                        <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                                                    </svg>
                                                    {/* <!-- Collapse icon, show/hide based on section open state. --> */}
                                                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                        <path fill-rule="evenodd" d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z" clip-rule="evenodd" />
                                                    </svg>
                                                </span>
                                            </button>
                                        </h3>
                                        {/* <!-- Filter section, show/hide based on section state. --> */}
                                        <div className="pt-6" id="filter-section-mobile-0">
                                            <div className="space-y-6">
                                                <div className="flex items-center">
                                                    <input id="filter-mobile-color-0" name="color[]" value="white" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                    <label for="filter-mobile-color-0" className="ml-3 min-w-0 flex-1 text-gray-500">White</label>
                                                </div>

                                                <div className="flex items-center">
                                                    <input id="filter-mobile-color-1" name="color[]" value="beige" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                    <label for="filter-mobile-color-1" className="ml-3 min-w-0 flex-1 text-gray-500">Beige</label>
                                                </div>

                                                <div className="flex items-center">
                                                    <input id="filter-mobile-color-2" name="color[]" value="blue" type="checkbox" checked className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                    <label for="filter-mobile-color-2" className="ml-3 min-w-0 flex-1 text-gray-500">Blue</label>
                                                </div>

                                                <div className="flex items-center">
                                                    <input id="filter-mobile-color-3" name="color[]" value="brown" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                    <label for="filter-mobile-color-3" className="ml-3 min-w-0 flex-1 text-gray-500">Brown</label>
                                                </div>

                                                <div className="flex items-center">
                                                    <input id="filter-mobile-color-4" name="color[]" value="green" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                    <label for="filter-mobile-color-4" className="ml-3 min-w-0 flex-1 text-gray-500">Green</label>
                                                </div>

                                                <div className="flex items-center">
                                                    <input id="filter-mobile-color-5" name="color[]" value="purple" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                    <label for="filter-mobile-color-5" className="ml-3 min-w-0 flex-1 text-gray-500">Purple</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="border-t border-gray-200 px-4 py-6">
                                        <h3 className="-mx-2 -my-3 flow-root">
                                            {/* <!-- Expand/collapse section button --> */}
                                            <button type="button" className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500" aria-controls="filter-section-mobile-1" aria-expanded="false">
                                                <span className="font-medium text-gray-900">Category</span>
                                                <span className="ml-6 flex items-center">
                                                    {/* <!-- Expand icon, show/hide based on section open state. --> */}
                                                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                        <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                                                    </svg>
                                                    {/* <!-- Collapse icon, show/hide based on section open state. --> */}
                                                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                        <path fill-rule="evenodd" d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z" clip-rule="evenodd" />
                                                    </svg>
                                                </span>
                                            </button>
                                        </h3>
                                        {/* <!-- Filter section, show/hide based on section state. --> */}
                                        <div className="pt-6" id="filter-section-mobile-1">
                                            <div className="space-y-6">
                                                <div className="flex items-center">
                                                    <input id="filter-mobile-category-0" name="category[]" value="new-arrivals" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                    <label for="filter-mobile-category-0" className="ml-3 min-w-0 flex-1 text-gray-500">New Arrivals</label>
                                                </div>

                                                <div className="flex items-center">
                                                    <input id="filter-mobile-category-1" name="category[]" value="sale" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                    <label for="filter-mobile-category-1" className="ml-3 min-w-0 flex-1 text-gray-500">Sale</label>
                                                </div>

                                                <div className="flex items-center">
                                                    <input id="filter-mobile-category-2" name="category[]" value="travel" type="checkbox" checked className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                    <label for="filter-mobile-category-2" className="ml-3 min-w-0 flex-1 text-gray-500">Travel</label>
                                                </div>

                                                <div className="flex items-center">
                                                    <input id="filter-mobile-category-3" name="category[]" value="organization" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                    <label for="filter-mobile-category-3" className="ml-3 min-w-0 flex-1 text-gray-500">Organization</label>
                                                </div>

                                                <div className="flex items-center">
                                                    <input id="filter-mobile-category-4" name="category[]" value="accessories" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                    <label for="filter-mobile-category-4" className="ml-3 min-w-0 flex-1 text-gray-500">Accessories</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="border-t border-gray-200 px-4 py-6">
                                        <h3 className="-mx-2 -my-3 flow-root">
                                            {/* <!-- Expand/collapse section button --> */}
                                            <button type="button" className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500" aria-controls="filter-section-mobile-2" aria-expanded="false">
                                                <span className="font-medium text-gray-900">Size</span>
                                                <span className="ml-6 flex items-center">
                                                    {/* <!-- Expand icon, show/hide based on section open state. --> */}
                                                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                        <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                                                    </svg>
                                                    {/* <!-- Collapse icon, show/hide based on section open state. --> */}
                                                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                        <path fill-rule="evenodd" d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z" clip-rule="evenodd" />
                                                    </svg>
                                                </span>
                                            </button>
                                        </h3>
                                        {/* <!-- Filter section, show/hide based on section state. --> */}
                                        <div className="pt-6" id="filter-section-mobile-2">
                                            <div className="space-y-6">
                                                <div className="flex items-center">
                                                    <input id="filter-mobile-size-0" name="size[]" value="2l" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                    <label for="filter-mobile-size-0" className="ml-3 min-w-0 flex-1 text-gray-500">2L</label>
                                                </div>

                                                <div className="flex items-center">
                                                    <input id="filter-mobile-size-1" name="size[]" value="6l" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                    <label for="filter-mobile-size-1" className="ml-3 min-w-0 flex-1 text-gray-500">6L</label>
                                                </div>

                                                <div className="flex items-center">
                                                    <input id="filter-mobile-size-2" name="size[]" value="12l" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                    <label for="filter-mobile-size-2" className="ml-3 min-w-0 flex-1 text-gray-500">12L</label>
                                                </div>

                                                <div className="flex items-center">
                                                    <input id="filter-mobile-size-3" name="size[]" value="18l" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                    <label for="filter-mobile-size-3" className="ml-3 min-w-0 flex-1 text-gray-500">18L</label>
                                                </div>

                                                <div className="flex items-center">
                                                    <input id="filter-mobile-size-4" name="size[]" value="20l" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                    <label for="filter-mobile-size-4" className="ml-3 min-w-0 flex-1 text-gray-500">20L</label>
                                                </div>

                                                <div className="flex items-center">
                                                    <input id="filter-mobile-size-5" name="size[]" value="40l" type="checkbox" checked className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                    <label for="filter-mobile-size-5" className="ml-3 min-w-0 flex-1 text-gray-500">40L</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
                            <h1 className="text-4xl font-bold tracking-tight text-gray-900">Shop</h1>

                            <div className="flex items-center">
                                <div className="relative inline-block text-left">
                                    <div>
                                        <button type="button" className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900" id="menu-button" aria-expanded="false" aria-haspopup="true">
                                            Sort
                                            <svg className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                                            </svg>
                                        </button>
                                    </div>

                                    <div className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                                        <div className="py-1" role="none">
                                            <a href="#" className="font-medium text-gray-900 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Most Popular</a>

                                            <a href="#" className="text-gray-500 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">Best Rating</a>

                                            <a href="#" className="text-gray-500 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">Newest</a>

                                            <a href="#" className="text-gray-500 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-3">Price: Low to High</a>

                                            <a href="#" className="text-gray-500 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-4">Price: High to Low</a>
                                        </div>
                                    </div>
                                </div>

                                {/* <button type="button" className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7">
                                    <span className="sr-only">View grid</span>
                                    <svg className="h-5 w-5" aria-hidden="true" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M4.25 2A2.25 2.25 0 002 4.25v2.5A2.25 2.25 0 004.25 9h2.5A2.25 2.25 0 009 6.75v-2.5A2.25 2.25 0 006.75 2h-2.5zm0 9A2.25 2.25 0 002 13.25v2.5A2.25 2.25 0 004.25 18h2.5A2.25 2.25 0 009 15.75v-2.5A2.25 2.25 0 006.75 11h-2.5zm9-9A2.25 2.25 0 0011 4.25v2.5A2.25 2.25 0 0013.25 9h2.5A2.25 2.25 0 0018 6.75v-2.5A2.25 2.25 0 0015.75 2h-2.5zm0 9A2.25 2.25 0 0011 13.25v2.5A2.25 2.25 0 0013.25 18h2.5A2.25 2.25 0 0018 15.75v-2.5A2.25 2.25 0 0015.75 11h-2.5z" clip-rule="evenodd" />
                                    </svg>
                                </button> */}
                                <button type="button" className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden">
                                    <span className="sr-only">Filters</span>
                                    <svg className="h-5 w-5" aria-hidden="true" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M2.628 1.601C5.028 1.206 7.49 1 10 1s4.973.206 7.372.601a.75.75 0 01.628.74v2.288a2.25 2.25 0 01-.659 1.59l-4.682 4.683a2.25 2.25 0 00-.659 1.59v3.037c0 .684-.31 1.33-.844 1.757l-1.937 1.55A.75.75 0 018 18.25v-5.757a2.25 2.25 0 00-.659-1.591L2.659 6.22A2.25 2.25 0 012 4.629V2.34a.75.75 0 01.628-.74z" clip-rule="evenodd" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <section aria-labelledby="products-heading" className="pb-24 pt-6">
                            <h2 id="products-heading" className="sr-only">Products</h2>

                            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                                {/* <!-- Filters --> */}
                                <form className="hidden lg:block">
                                    <h3 className="sr-only">Categories</h3>
                                    <ul role="list" className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900">
                                        <li>
                                            <a href="#">Totes</a>
                                        </li>

                                        <li>
                                            <a href="#">Backpacks</a>
                                        </li>

                                        <li>
                                            <a href="#">Travel Bags</a>
                                        </li>

                                        <li>
                                            <a href="#">Hip Bags</a>
                                        </li>

                                        <li>
                                            <a href="#">Laptop Sleeves</a>
                                        </li>
                                    </ul>

                                    <div className="border-b border-gray-200 py-6">
                                        <h3 className="-my-3 flow-root">
                                            {/* <!-- Expand/collapse section button --> */}
                                            <button type="button" className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500" aria-controls="filter-section-0" aria-expanded="false">
                                                <span className="font-medium text-gray-900">Color</span>
                                                <span className="ml-6 flex items-center">
                                                    {/* <!-- Expand icon, show/hide based on section open state. --> */}
                                                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                        <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                                                    </svg>
                                                    {/* <!-- Collapse icon, show/hide based on section open state. --> */}
                                                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                        <path fill-rule="evenodd" d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z" clip-rule="evenodd" />
                                                    </svg>
                                                </span>
                                            </button>
                                        </h3>
                                        {/* <!-- Filter section, show/hide based on section state. --> */}
                                        <div className="pt-6" id="filter-section-0">
                                            <div className="space-y-4">
                                                <div className="flex items-center">
                                                    <input id="filter-color-0" name="color[]" value="white" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                    <label for="filter-color-0" className="ml-3 text-sm text-gray-600">White</label>
                                                </div>

                                                <div className="flex items-center">
                                                    <input id="filter-color-1" name="color[]" value="beige" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                    <label for="filter-color-1" className="ml-3 text-sm text-gray-600">Beige</label>
                                                </div>

                                                <div className="flex items-center">
                                                    <input id="filter-color-2" name="color[]" value="blue" type="checkbox" checked className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                    <label for="filter-color-2" className="ml-3 text-sm text-gray-600">Blue</label>
                                                </div>

                                                <div className="flex items-center">
                                                    <input id="filter-color-3" name="color[]" value="brown" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                    <label for="filter-color-3" className="ml-3 text-sm text-gray-600">Brown</label>
                                                </div>

                                                <div className="flex items-center">
                                                    <input id="filter-color-4" name="color[]" value="green" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                    <label for="filter-color-4" className="ml-3 text-sm text-gray-600">Green</label>
                                                </div>

                                                <div className="flex items-center">
                                                    <input id="filter-color-5" name="color[]" value="purple" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                    <label for="filter-color-5" className="ml-3 text-sm text-gray-600">Purple</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="border-b border-gray-200 py-6">
                                        <h3 className="-my-3 flow-root">
                                            {/* <!-- Expand/collapse section button --> */}
                                            <button type="button" className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500" aria-controls="filter-section-1" aria-expanded="false">
                                                <span className="font-medium text-gray-900">Category</span>
                                                <span className="ml-6 flex items-center">
                                                    {/* <!-- Expand icon, show/hide based on section open state. --> */}
                                                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                        <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                                                    </svg>
                                                    {/* <!-- Collapse icon, show/hide based on section open state. --> */}
                                                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                        <path fill-rule="evenodd" d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z" clip-rule="evenodd" />
                                                    </svg>
                                                </span>
                                            </button>
                                        </h3>
                                        {/* <!-- Filter section, show/hide based on section state. --> */}
                                        <div className="pt-6" id="filter-section-1">
                                            <div className="space-y-4">
                                                <div className="flex items-center">
                                                    <input id="filter-category-0" name="category[]" value="new-arrivals" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                    <label for="filter-category-0" className="ml-3 text-sm text-gray-600">New Arrivals</label>
                                                </div>

                                                <div className="flex items-center">
                                                    <input id="filter-category-1" name="category[]" value="sale" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                    <label for="filter-category-1" className="ml-3 text-sm text-gray-600">Sale</label>
                                                </div>

                                                <div className="flex items-center">
                                                    <input id="filter-category-2" name="category[]" value="travel" type="checkbox" checked className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                    <label for="filter-category-2" className="ml-3 text-sm text-gray-600">Travel</label>
                                                </div>

                                                <div className="flex items-center">
                                                    <input id="filter-category-3" name="category[]" value="organization" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                    <label for="filter-category-3" className="ml-3 text-sm text-gray-600">Organization</label>
                                                </div>

                                                <div className="flex items-center">
                                                    <input id="filter-category-4" name="category[]" value="accessories" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                    <label for="filter-category-4" className="ml-3 text-sm text-gray-600">Accessories</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="border-b border-gray-200 py-6">
                                        <h3 className="-my-3 flow-root">
                                            {/* <!-- Expand/collapse section button --> */}
                                            <button type="button" className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500" aria-controls="filter-section-2" aria-expanded="false">
                                                <span className="font-medium text-gray-900">Size</span>
                                                <span className="ml-6 flex items-center">
                                                    {/* <!-- Expand icon, show/hide based on section open state. --> */}
                                                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                        <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                                                    </svg>
                                                    {/* <!-- Collapse icon, show/hide based on section open state. --> */}
                                                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                        <path fill-rule="evenodd" d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z" clip-rule="evenodd" />
                                                    </svg>
                                                </span>
                                            </button>
                                        </h3>
                                        {/* <!-- Filter section, show/hide based on section state. --> */}
                                        <div className="pt-6" id="filter-section-2">
                                            <div className="space-y-4">
                                                <div className="flex items-center">
                                                    <input id="filter-size-0" name="size[]" value="2l" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                    <label for="filter-size-0" className="ml-3 text-sm text-gray-600">2L</label>
                                                </div>

                                                <div className="flex items-center">
                                                    <input id="filter-size-1" name="size[]" value="6l" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                    <label for="filter-size-1" className="ml-3 text-sm text-gray-600">6L</label>
                                                </div>

                                                <div className="flex items-center">
                                                    <input id="filter-size-2" name="size[]" value="12l" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                    <label for="filter-size-2" className="ml-3 text-sm text-gray-600">12L</label>
                                                </div>

                                                <div className="flex items-center">
                                                    <input id="filter-size-3" name="size[]" value="18l" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                    <label for="filter-size-3" className="ml-3 text-sm text-gray-600">18L</label>
                                                </div>

                                                <div className="flex items-center">
                                                    <input id="filter-size-4" name="size[]" value="20l" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                    <label for="filter-size-4" className="ml-3 text-sm text-gray-600">20L</label>
                                                </div>

                                                <div className="flex items-center">
                                                    <input id="filter-size-5" name="size[]" value="40l" type="checkbox" checked className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                    <label for="filter-size-5" className="ml-3 text-sm text-gray-600">40L</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>

                                {/* <!-- Product grid --> */}
                                <div className="lg:col-span-3">
                                    {/* <!-- Your content --> */}
                                    <div className="bg-white">
                                        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                                            <h2 className="sr-only">Products</h2>

                                            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
                                                <a href="#" className="group">
                                                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                                                        <img src={decorImage} alt={"moroccan"} className="h-full w-full object-cover object-center group-hover:opacity-75" />
                                                    </div>
                                                    <h3 className="mt-4 text-sm text-gray-700">Earthen Bottle</h3>
                                                    <p className="mt-1 text-lg font-medium text-gray-900">$48</p>
                                                </a>

                                                <a href="#" className="group">
                                                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                                                        <img src={decorImage} alt={"moroccan"} className="h-full w-full object-cover object-center group-hover:opacity-75" />
                                                    </div>
                                                    <h3 className="mt-4 text-sm text-gray-700">Nomad Tumbler</h3>
                                                    <p className="mt-1 text-lg font-medium text-gray-900">$35</p>
                                                </a>

                                                <a href="#" className="group">
                                                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                                                        <img src={decorImage} alt={"moroccan"} className="h-full w-full object-cover object-center group-hover:opacity-75" />
                                                    </div>
                                                    <h3 className="mt-4 text-sm text-gray-700">Focus Paper Refill</h3>
                                                    <p className="mt-1 text-lg font-medium text-gray-900">$89</p>
                                                </a>

                                                <a href="#" className="group">
                                                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                                                        <img src={decorImage} alt={"moroccan"} className="h-full w-full object-cover object-center group-hover:opacity-75" />
                                                    </div>
                                                    <h3 className="mt-4 text-sm text-gray-700">Machined Mechanical Pencil</h3>
                                                    <p className="mt-1 text-lg font-medium text-gray-900">$35</p>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </main>
                </div>
            </div>



            <div>

                <div className="bg-gray-100 flex flex-col justify-center">
                    <div className='pt-10'>
                        <div className='flex justify-between container'>
                            <h1 className='uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl'>Home decor</h1>
                            <Link to="/all-products">View all</Link>
                        </div>
                    </div>

                    <div className="relative m-3 flex flex-wrap mx-auto justify-center">
                        <div className="relative max-w-sm min-w-[340px] bg-white shadow-md rounded-3xl p-2 mx-1 my-3 cursor-pointer">
                            <div className="overflow-x-hidden rounded-2xl relative">
                                <img src={decorImage} alt={"moroccan"} />
                                <p className="absolute right-2 top-2 bg-white rounded-full p-2 cursor-pointer group">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:opacity-50 opacity-70" fill="none" viewBox="0 0 24 24" stroke="black">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </p>
                            </div>
                            <div className="mt-4 pl-2 mb-2 flex justify-between ">
                                <div>
                                    <p className="text-lg font-semibold text-gray-900 mb-0">Name</p>
                                    <p className="text-md text-gray-800 mt-0">100 DH</p>
                                </div>
                                <div className="flex flex-col-reverse mb-1 mr-4 group cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:opacity-70" fill="none" viewBox="0 0 24 24" stroke="gray">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="relative max-w-sm min-w-[340px] bg-white shadow-md rounded-3xl p-2 mx-1 my-3 cursor-pointer">
                            <div className="overflow-x-hidden rounded-2xl relative">
                                <img src={decorImage} alt={"moroccan"} />
                                <p className="absolute right-2 top-2 bg-white rounded-full p-2 cursor-pointer group">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:opacity-50 opacity-70" fill="none" viewBox="0 0 24 24" stroke="black">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </p>
                            </div>
                            <div className="mt-4 pl-2 mb-2 flex justify-between ">
                                <div>
                                    <p className="text-lg font-semibold text-gray-900 mb-0">Name</p>
                                    <p className="text-md text-gray-800 mt-0">100 DH</p>
                                </div>
                                <div className="flex flex-col-reverse mb-1 mr-4 group cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:opacity-70" fill="none" viewBox="0 0 24 24" stroke="gray">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="relative max-w-sm min-w-[340px] bg-white shadow-md rounded-3xl p-2 mx-1 my-3 cursor-pointer">
                            <div className="overflow-x-hidden rounded-2xl relative">
                                <img src={decorImage} alt={"moroccan"} />
                                <p className="absolute right-2 top-2 bg-white rounded-full p-2 cursor-pointer group">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:opacity-50 opacity-70" fill="none" viewBox="0 0 24 24" stroke="black">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </p>
                            </div>
                            <div className="mt-4 pl-2 mb-2 flex justify-between ">
                                <div>
                                    <p className="text-lg font-semibold text-gray-900 mb-0">Name</p>
                                    <p className="text-md text-gray-800 mt-0">100 DH</p>
                                </div>
                                <div className="flex flex-col-reverse mb-1 mr-4 group cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:opacity-70" fill="none" viewBox="0 0 24 24" stroke="gray">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-gray-100 flex flex-col justify-center">
                    <div className='pt-10'>
                        <div className='flex justify-between container'>
                            <h1 className='uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl'>Women</h1>
                            <Link to="/all-products">View all</Link>
                        </div>
                    </div>

                    <div className="relative m-3 flex flex-wrap mx-auto justify-center">
                        <div className="relative max-w-sm min-w-[340px] bg-white shadow-md rounded-3xl p-2 mx-1 my-3 cursor-pointer">
                            <div className="overflow-x-hidden rounded-2xl relative">
                                <img src={decorImage} alt={"moroccan"} />
                                <p className="absolute right-2 top-2 bg-white rounded-full p-2 cursor-pointer group">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:opacity-50 opacity-70" fill="none" viewBox="0 0 24 24" stroke="black">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </p>
                            </div>
                            <div className="mt-4 pl-2 mb-2 flex justify-between ">
                                <div>
                                    <p className="text-lg font-semibold text-gray-900 mb-0">Name</p>
                                    <p className="text-md text-gray-800 mt-0">100 DH</p>
                                </div>
                                <div className="flex flex-col-reverse mb-1 mr-4 group cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:opacity-70" fill="none" viewBox="0 0 24 24" stroke="gray">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="relative max-w-sm min-w-[340px] bg-white shadow-md rounded-3xl p-2 mx-1 my-3 cursor-pointer">
                            <div className="overflow-x-hidden rounded-2xl relative">
                                <img src={decorImage} alt={"moroccan"} />
                                <p className="absolute right-2 top-2 bg-white rounded-full p-2 cursor-pointer group">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:opacity-50 opacity-70" fill="none" viewBox="0 0 24 24" stroke="black">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </p>
                            </div>
                            <div className="mt-4 pl-2 mb-2 flex justify-between ">
                                <div>
                                    <p className="text-lg font-semibold text-gray-900 mb-0">Name</p>
                                    <p className="text-md text-gray-800 mt-0">100 DH</p>
                                </div>
                                <div className="flex flex-col-reverse mb-1 mr-4 group cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:opacity-70" fill="none" viewBox="0 0 24 24" stroke="gray">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="relative max-w-sm min-w-[340px] bg-white shadow-md rounded-3xl p-2 mx-1 my-3 cursor-pointer">
                            <div className="overflow-x-hidden rounded-2xl relative">
                                <img src={decorImage} alt={"moroccan"} />
                                <p className="absolute right-2 top-2 bg-white rounded-full p-2 cursor-pointer group">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:opacity-50 opacity-70" fill="none" viewBox="0 0 24 24" stroke="black">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </p>
                            </div>
                            <div className="mt-4 pl-2 mb-2 flex justify-between ">
                                <div>
                                    <p className="text-lg font-semibold text-gray-900 mb-0">Name</p>
                                    <p className="text-md text-gray-800 mt-0">100 DH</p>
                                </div>
                                <div className="flex flex-col-reverse mb-1 mr-4 group cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:opacity-70" fill="none" viewBox="0 0 24 24" stroke="gray">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-gray-100 flex flex-col justify-center">
                    <div className='pt-10'>
                        <div className='flex justify-between container'>
                            <h1 className='uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl'>Men</h1>
                            <Link to="/all-products">View all</Link>
                        </div>
                    </div>

                    <div className="relative m-3 flex flex-wrap mx-auto justify-center">
                        <div className="relative max-w-sm min-w-[340px] bg-white shadow-md rounded-3xl p-2 mx-1 my-3 cursor-pointer">
                            <div className="overflow-x-hidden rounded-2xl relative">
                                <img src={decorImage} alt={"moroccan"} />
                                <p className="absolute right-2 top-2 bg-white rounded-full p-2 cursor-pointer group">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:opacity-50 opacity-70" fill="none" viewBox="0 0 24 24" stroke="black">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </p>
                            </div>
                            <div className="mt-4 pl-2 mb-2 flex justify-between ">
                                <div>
                                    <p className="text-lg font-semibold text-gray-900 mb-0">Name</p>
                                    <p className="text-md text-gray-800 mt-0">100 DH</p>
                                </div>
                                <div className="flex flex-col-reverse mb-1 mr-4 group cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:opacity-70" fill="none" viewBox="0 0 24 24" stroke="gray">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="relative max-w-sm min-w-[340px] bg-white shadow-md rounded-3xl p-2 mx-1 my-3 cursor-pointer">
                            <div className="overflow-x-hidden rounded-2xl relative">
                                <img src={decorImage} alt={"moroccan"} />
                                <p className="absolute right-2 top-2 bg-white rounded-full p-2 cursor-pointer group">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:opacity-50 opacity-70" fill="none" viewBox="0 0 24 24" stroke="black">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </p>
                            </div>
                            <div className="mt-4 pl-2 mb-2 flex justify-between ">
                                <div>
                                    <p className="text-lg font-semibold text-gray-900 mb-0">Name</p>
                                    <p className="text-md text-gray-800 mt-0">100 DH</p>
                                </div>
                                <div className="flex flex-col-reverse mb-1 mr-4 group cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:opacity-70" fill="none" viewBox="0 0 24 24" stroke="gray">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="relative max-w-sm min-w-[340px] bg-white shadow-md rounded-3xl p-2 mx-1 my-3 cursor-pointer">
                            <div className="overflow-x-hidden rounded-2xl relative">
                                <img src={decorImage} alt={"moroccan"} />
                                <p className="absolute right-2 top-2 bg-white rounded-full p-2 cursor-pointer group">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:opacity-50 opacity-70" fill="none" viewBox="0 0 24 24" stroke="black">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </p>
                            </div>
                            <div className="mt-4 pl-2 mb-2 flex justify-between ">
                                <div>
                                    <p className="text-lg font-semibold text-gray-900 mb-0">Name</p>
                                    <p className="text-md text-gray-800 mt-0">100 DH</p>
                                </div>
                                <div className="flex flex-col-reverse mb-1 mr-4 group cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:opacity-70" fill="none" viewBox="0 0 24 24" stroke="gray">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-gray-100 flex flex-col justify-center">
                    <div className='pt-10'>
                        <div className='flex justify-between container'>
                            <h1 className='uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl'>Skincare</h1>
                            <Link to="/all-products">View all</Link>
                        </div>
                    </div>

                    <div className="relative m-3 flex flex-wrap mx-auto justify-center">
                        <div className="relative max-w-sm min-w-[340px] bg-white shadow-md rounded-3xl p-2 mx-1 my-3 cursor-pointer">
                            <div className="overflow-x-hidden rounded-2xl relative">
                                <img src={decorImage} alt={"moroccan"} />
                                <p className="absolute right-2 top-2 bg-white rounded-full p-2 cursor-pointer group">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:opacity-50 opacity-70" fill="none" viewBox="0 0 24 24" stroke="black">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </p>
                            </div>
                            <div className="mt-4 pl-2 mb-2 flex justify-between ">
                                <div>
                                    <p className="text-lg font-semibold text-gray-900 mb-0">Name</p>
                                    <p className="text-md text-gray-800 mt-0">100 DH</p>
                                </div>
                                <div className="flex flex-col-reverse mb-1 mr-4 group cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:opacity-70" fill="none" viewBox="0 0 24 24" stroke="gray">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="relative max-w-sm min-w-[340px] bg-white shadow-md rounded-3xl p-2 mx-1 my-3 cursor-pointer">
                            <div className="overflow-x-hidden rounded-2xl relative">
                                <img src={decorImage} alt={"moroccan"} />
                                <p className="absolute right-2 top-2 bg-white rounded-full p-2 cursor-pointer group">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:opacity-50 opacity-70" fill="none" viewBox="0 0 24 24" stroke="black">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </p>
                            </div>
                            <div className="mt-4 pl-2 mb-2 flex justify-between ">
                                <div>
                                    <p className="text-lg font-semibold text-gray-900 mb-0">Name</p>
                                    <p className="text-md text-gray-800 mt-0">100 DH</p>
                                </div>
                                <div className="flex flex-col-reverse mb-1 mr-4 group cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:opacity-70" fill="none" viewBox="0 0 24 24" stroke="gray">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="relative max-w-sm min-w-[340px] bg-white shadow-md rounded-3xl p-2 mx-1 my-3 cursor-pointer">
                            <div className="overflow-x-hidden rounded-2xl relative">
                                <img src={decorImage} alt={"moroccan"} />
                                <p className="absolute right-2 top-2 bg-white rounded-full p-2 cursor-pointer group">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:opacity-50 opacity-70" fill="none" viewBox="0 0 24 24" stroke="black">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </p>
                            </div>
                            <div className="mt-4 pl-2 mb-2 flex justify-between ">
                                <div>
                                    <p className="text-lg font-semibold text-gray-900 mb-0">Name</p>
                                    <p className="text-md text-gray-800 mt-0">100 DH</p>
                                </div>
                                <div className="flex flex-col-reverse mb-1 mr-4 group cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:opacity-70" fill="none" viewBox="0 0 24 24" stroke="gray">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-gray-100 flex flex-col justify-center">
                    <div className='pt-10'>
                        <div className='flex justify-between container'>
                            <h1 className='uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl'>Food</h1>
                            <Link to="/all-products">View all</Link>
                        </div>
                    </div>

                    <div className="relative m-3 flex flex-wrap mx-auto justify-center">
                        <div className="relative max-w-sm min-w-[340px] bg-white shadow-md rounded-3xl p-2 mx-1 my-3 cursor-pointer">
                            <div className="overflow-x-hidden rounded-2xl relative">
                                <img src={decorImage} alt={"moroccan"} />
                                <p className="absolute right-2 top-2 bg-white rounded-full p-2 cursor-pointer group">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:opacity-50 opacity-70" fill="none" viewBox="0 0 24 24" stroke="black">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </p>
                            </div>
                            <div className="mt-4 pl-2 mb-2 flex justify-between ">
                                <div>
                                    <p className="text-lg font-semibold text-gray-900 mb-0">Name</p>
                                    <p className="text-md text-gray-800 mt-0">100 DH</p>
                                </div>
                                <div className="flex flex-col-reverse mb-1 mr-4 group cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:opacity-70" fill="none" viewBox="0 0 24 24" stroke="gray">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="relative max-w-sm min-w-[340px] bg-white shadow-md rounded-3xl p-2 mx-1 my-3 cursor-pointer">
                            <div className="overflow-x-hidden rounded-2xl relative">
                                <img src={decorImage} alt={"moroccan"} />
                                <p className="absolute right-2 top-2 bg-white rounded-full p-2 cursor-pointer group">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:opacity-50 opacity-70" fill="none" viewBox="0 0 24 24" stroke="black">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </p>
                            </div>
                            <div className="mt-4 pl-2 mb-2 flex justify-between ">
                                <div>
                                    <p className="text-lg font-semibold text-gray-900 mb-0">Name</p>
                                    <p className="text-md text-gray-800 mt-0">100 DH</p>
                                </div>
                                <div className="flex flex-col-reverse mb-1 mr-4 group cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:opacity-70" fill="none" viewBox="0 0 24 24" stroke="gray">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="relative max-w-sm min-w-[340px] bg-white shadow-md rounded-3xl p-2 mx-1 my-3 cursor-pointer">
                            <div className="overflow-x-hidden rounded-2xl relative">
                                <img src={decorImage} alt={"moroccan"} />
                                <p className="absolute right-2 top-2 bg-white rounded-full p-2 cursor-pointer group">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:opacity-50 opacity-70" fill="none" viewBox="0 0 24 24" stroke="black">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </p>
                            </div>
                            <div className="mt-4 pl-2 mb-2 flex justify-between ">
                                <div>
                                    <p className="text-lg font-semibold text-gray-900 mb-0">Name</p>
                                    <p className="text-md text-gray-800 mt-0">100 DH</p>
                                </div>
                                <div className="flex flex-col-reverse mb-1 mr-4 group cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:opacity-70" fill="none" viewBox="0 0 24 24" stroke="gray">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white">
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                    <h2 className="sr-only">Products</h2>

                    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                        <a href="#" className="group">
                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                                <img src={decorImage} alt={"moroccan"} className="h-full w-full object-cover object-center group-hover:opacity-75" />
                            </div>
                            <h3 className="mt-4 text-sm text-gray-700">Earthen Bottle</h3>
                            <p className="mt-1 text-lg font-medium text-gray-900">$48</p>
                        </a>

                        <a href="#" className="group">
                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                                <img src={decorImage} alt={"moroccan"} className="h-full w-full object-cover object-center group-hover:opacity-75" />
                            </div>
                            <h3 className="mt-4 text-sm text-gray-700">Nomad Tumbler</h3>
                            <p className="mt-1 text-lg font-medium text-gray-900">$35</p>
                        </a>

                        <a href="#" className="group">
                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                                <img src={decorImage} alt={"moroccan"} className="h-full w-full object-cover object-center group-hover:opacity-75" />
                            </div>
                            <h3 className="mt-4 text-sm text-gray-700">Focus Paper Refill</h3>
                            <p className="mt-1 text-lg font-medium text-gray-900">$89</p>
                        </a>

                        <a href="#" className="group">
                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                                <img src={decorImage} alt={"moroccan"} className="h-full w-full object-cover object-center group-hover:opacity-75" />
                            </div>
                            <h3 className="mt-4 text-sm text-gray-700">Machined Mechanical Pencil</h3>
                            <p className="mt-1 text-lg font-medium text-gray-900">$35</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shop;