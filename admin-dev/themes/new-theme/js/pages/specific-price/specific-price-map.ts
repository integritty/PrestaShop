/**
 * Copyright since 2007 PrestaShop SA and Contributors
 * PrestaShop is an International Registered Trademark & Property of PrestaShop SA
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Open Software License (OSL 3.0)
 * that is bundled with this package in the file LICENSE.md.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/OSL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to https://devdocs.prestashop.com/ for more information.
 *
 * @author    PrestaShop SA and Contributors <contact@prestashop.com>
 * @copyright Since 2007 PrestaShop SA and Contributors
 * @license   https://opensource.org/licenses/OSL-3.0 Open Software License (OSL 3.0)
 */

export default {
  currencyId: '#specific_price_currency_id',
  customerSearchContainer: '#specific_price_customer',
  priceInput: '#specific_price_fixed_price',
  priceSymbol: '.js-fixed_price-row .input-group.money-type .input-group-append .input-group-text, '
    + '.js-fixed_price-row .input-group.money-type .input-group-prepend .input-group-text',
  leaveInitialPriceCheckbox: '#specific_price_leave_initial_price',
  reductionTypeSelect: '#specific_price_reduction_type',
  reductionTypeAmountSymbol: '#specific_price_reduction .input-group .input-group-append .input-group-text, '
    + '#specific_price_reduction .input-group .input-group-prepend .input-group-text',
  includeTaxInputContainer: '.js-include-tax-row',
};
